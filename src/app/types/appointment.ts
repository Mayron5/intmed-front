import { Medic } from "./medic"

export type Appointment = {
  id: number,
  dia: string,
  horario: string,
  data_agendamento: Date,
  medico: Medic
}
