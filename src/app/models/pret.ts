import { MembreSession } from "./membreSession";

export interface Pret {
  id_pret: number;
  montant: number;
  date_pret: Date;
  date_remboursement: Date;
  membreSession: MembreSession;
  duree: number;
  interet_generer: number;
}
