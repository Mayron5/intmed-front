import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Specialty } from 'src/app/types/specialty';
import { environment } from 'src/environments/environment';
import { Medic } from '../types/medic';
import { Appointment } from '../types/appointment';
import { Schedule } from '../types/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules = new BehaviorSubject<Appointment[]>([]);
  private scheduleList: Appointment[] = [];

  private API_URL = environment.API_URL;

  constructor(
    private _http: HttpClient
  ) { }

  public getSchedules() {
    return this.schedules.asObservable();
  }

  private setSchedules(schedules: Appointment[]) {
    this.scheduleList = schedules;
    this.schedules.next(this.scheduleList);
  }

  public getSchedulesFromAPI(userId: string | null) {
    this._http.get<Appointment[]>(`${this.API_URL}/consultas?userid=${userId}`).subscribe({
      next: (response) => this.setSchedules(response),
    });
  }

  public getSpecialties() {
    return this._http.get<Specialty[]>(`${this.API_URL}/especialidades/`);
  }

  public getMedicBySpecialty(specialtyId: number) {
    return this._http.get<Medic[]>(`${this.API_URL}/medicos/?search=${specialtyId}`);
  }

  public getAvaliableDatesAndHours(specialtyId: number, medicId: number) {
    return this._http.get<Schedule[]>(`${this.API_URL}/agendas/?medico=${medicId}&especialidade=${specialtyId}`);
  }

  public postSchedule(agenda_id: number, horario: string, usuario_id: string | null) {
    return this._http.post<Appointment>(`${this.API_URL}/consultas/`, {horario, agenda_id, usuario_id}).subscribe({
      next: (response) => {
        this.scheduleList.push(response);
        this.schedules.next(this.scheduleList);
      },
      error: (error) => alert(error)
    })
  }

  public deleteSchedule(id: number) {
    this._http.delete(`${this.API_URL}/consultas?id=${id}`).subscribe({
      next: () => {
        this.scheduleList = this.scheduleList.filter(item => item.id !== id);
        this.schedules.next(this.scheduleList);
      },
      error: (error) => alert(error)
    })
  }

}
