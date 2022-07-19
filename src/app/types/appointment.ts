import { Schedule } from "./schedule"

export type Appointment = {
  id: number,
  dia: string,
  horario: string,
  data_agendamento: Date,
  agenda: Schedule
}
