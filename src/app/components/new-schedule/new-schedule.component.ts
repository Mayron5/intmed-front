import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medic } from 'src/app/types/medic';
import { Schedule } from 'src/app/types/schedule';
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
  public medics: Medic[] = [];
  public dates: any[] = [];
  public hours!: any;

  public formNewSchedule!: FormGroup;

  constructor(
    private _newScheduleSerivce: ScheduleService,
    private _scheduleService: ScheduleService
  ) {

  }

  ngOnInit() {

    this.formNewSchedule = new FormGroup({
      specialty: new FormControl({ value: '0', disabled: false }, [Validators.required, Validators.min(1)]),
      medic: new FormControl({ value: '0', disabled: true }, [Validators.required, Validators.min(1)]),
      date: new FormControl({ value: '0', disabled: true }, [Validators.required, Validators.min(1)]),
      hour: new FormControl({ value: '0', disabled: true }, [Validators.required, Validators.min(1)]),
    })

    this._newScheduleSerivce.getSpecialties().subscribe({
      next: (response) => {
        this.specialties = response
      }
    })

    this.formNewSchedule.get('specialty')?.valueChanges.subscribe(
      () => {
        this.formNewSchedule.get('medic')?.enable({ onlySelf: false })
        this._newScheduleSerivce.getMedicBySpecialty(this.formNewSchedule.get('specialty')?.value).subscribe(response => this.medics = response)
        this.formNewSchedule.get('medic')?.valueChanges.subscribe(
          () => {
            this.dates = [];
            this.hours = null;
            let schedules: Schedule[] = [];

            this._newScheduleSerivce.getAvaliableDatesAndHours(
              this.formNewSchedule.get('specialty')?.value,
              this.formNewSchedule.get('medic')?.value
            ).subscribe(response => {
              schedules = response;
              const filtted = schedules.filter(item => item.medico.id === +this.formNewSchedule.get('medic')?.value);
              filtted.map(item => this.dates.push(item.dia))
            })

            this.formNewSchedule.get('date')?.enable({ onlySelf: false })

            this.formNewSchedule.get('date')?.valueChanges.subscribe(
              () => {
                this.formNewSchedule.get('hour')?.enable({ onlySelf: false })
                const filtted = schedules.filter(item => item.dia === this.formNewSchedule.get('date')?.value && item.medico.id === +this.formNewSchedule.get('medic')?.value);
                this.hours = filtted[0]
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
