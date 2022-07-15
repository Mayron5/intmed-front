import { Medic } from "./medic"

export type Schedule = {
  id: number,
  dia: string,
  horario: string,
  data_agendamento: Date,
  medico: Medic
}
