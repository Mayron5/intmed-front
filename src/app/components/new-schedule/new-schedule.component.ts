import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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
  public hours: any[] = [];

  public formNewSchedule!: FormGroup;

  constructor(
    private _newScheduleSerivce: ScheduleService,
    private _userService: UserService
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
      (specialty) => {
        this.formNewSchedule.get('medic')?.enable({ onlySelf: false })
        this._newScheduleSerivce.getMedicBySpecialty(specialty).subscribe(response => this.medics = response)
        this.formNewSchedule.get('medic')?.valueChanges.subscribe(
          (medic) => {
            this._newScheduleSerivce.getAvaliableDatesAndHours(specialty, medic).subscribe(response => { this.dates = response })
            this.formNewSchedule.get('date')?.enable({ onlySelf: false })
            this.formNewSchedule.get('date')?.valueChanges.subscribe(
              (date) => {
                this.formNewSchedule.get('hour')?.enable({ onlySelf: false })
                this.hours = this.dates.filter(item => item.dia === date)[0]?.horarios
              }
            )
          }
        )

      }
    )

  }

  public confirmSchedule() {

    const scheduleId = this.dates.filter(item => this.formNewSchedule.get('date')?.value === item.dia)[0]?.id;
    this._newScheduleSerivce.postSchedule(scheduleId, this.formNewSchedule.get('hour')?.value, this._userService.getUserId());
    this.closeModal();
  }

  public closeModal() {
    this.closeEvent.emit(false);
  }

}
