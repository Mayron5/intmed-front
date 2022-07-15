import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Specialty } from 'src/app/types/specialty';
import { environment } from 'src/environments/environment';
import { Schedule } from '../types/schedules';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules = new BehaviorSubject<Schedule[]>([]);
  private scheduleList: Schedule[] = [];

  private API_URL = environment.API_URL;

  constructor(
    private _http: HttpClient
  ) { }

  public getSchedules() {
    return this.schedules.asObservable();
  }

  private setSchedules(schedules: Schedule[]) {
    this.scheduleList = schedules;
    this.schedules.next(this.scheduleList);
  }

  public getSchedulesFromAPI() {
    this._http.get<Schedule[]>(`${this.API_URL}/consultas`).subscribe({
      next: (response) => this.setSchedules(response),
    });
  }

  public getSpecialties() {
    return this._http.get<Specialty[]>(`${this.API_URL}/especialidades`);
  }

  public postSchedule() {
    return this._http.post<Schedule>(`${this.API_URL}/consultas`, {
      agenda_id: 1,
      horario: '4:15'
    }).subscribe(
      response => {
        this.scheduleList.push(response);
        this.schedules.next(this.scheduleList);
      }
    )
  }

  public deleteSchedule(id: number) {
    this._http.delete(`${this.API_URL}/consultas/${id}`).subscribe({
      next: () => {
        this.scheduleList = this.scheduleList.filter(item => item.id !== id);
        this.schedules.next(this.scheduleList);
      }
    })
  }

}
