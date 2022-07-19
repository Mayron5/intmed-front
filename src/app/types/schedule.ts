import { Medic } from "./medic"

export type Schedule = {
  id: number,
  medico: Medic,
  dia: Date,
  horarios: string[]
}
