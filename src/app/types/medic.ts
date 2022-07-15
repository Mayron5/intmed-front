import { Specialty } from "./specialty"

export type Medic = {
  id: number,
  crm: number,
  nome: string,
  especialidade: Specialty
}
