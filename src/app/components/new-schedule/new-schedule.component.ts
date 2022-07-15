import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Specialty } from 'src/app/types/specialty';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.sass']
})
export class NewScheduleComponent implements OnInit {

  @Output() closeEvent = new EventEmitter();

  public specialties: Specialty[] = [];
  public formNewSchedule!: FormGroup;

  constructor(
    private _newScheduleSerivce: ScheduleService,
    private _scheduleService: ScheduleService
  ) {

  }

  ngOnInit() {

    this.formNewSchedule = new FormGroup({
      specialty: new FormControl({ value: null, disabled: false }, [Validators.required]),
      medic: new FormControl({ value: null, disabled: true }, [Validators.required]),
      date: new FormControl({ value: null, disabled: true }, [Validators.required]),
      hour: new FormControl({ value: null, disabled: true }, [Validators.required]),
    })

    this._newScheduleSerivce.getSpecialties().subscribe({
      next: (response) => {
        this.specialties = response
      }
    })

    this.formNewSchedule.get('specialty')?.valueChanges.subscribe(
      () => {
        this.formNewSchedule.get('medic')?.enable({ onlySelf: false })

        this.formNewSchedule.get('medic')?.valueChanges.subscribe(
          () => {
            this.formNewSchedule.get('date')?.enable({ onlySelf: false })

            this.formNewSchedule.get('date')?.valueChanges.subscribe(
              () => {
                this.formNewSchedule.get('hour')?.enable({ onlySelf: false })
              }
            )
          }
        )

      }
    )

  }

  public confirmSchedule() {
    this._scheduleService.postSchedule();
    this.closeModal();
  }

  public closeModal() {
    this.closeEvent.emit(false);
  }

}
