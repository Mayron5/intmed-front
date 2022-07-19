import { Component, OnInit } from '@angular/core';
import { OpacityAnimation } from 'src/app/animations/opacittyAnimation';
import { ScheduleService } from 'src/app/services/schedule.service';
import { UserService } from 'src/app/services/user.service';
import { Appointment } from 'src/app/types/appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ScheduleService],
  animations: [OpacityAnimation]
})
export class HomeComponent implements OnInit {

  public shouldOpenModal: boolean = false;
  public shouldOpenConfirmation: boolean = false;
  public id: number = 0;

  public userId = this._userService.getUserId()

  public appointments!: Appointment[];

  constructor(
    private _scheduleService: ScheduleService,
    private _userService: UserService,
  ) { }

  ngOnInit() {

    this._scheduleService.getSchedulesFromAPI(this.userId);


    this._scheduleService.getSchedules().subscribe({
      next: (response) => {
        this.appointments = response;
      }
    });

  }

  public confirmation(id: number) {
    this.id = id;
    this.shouldOpenConfirmation = true;
  }

}
