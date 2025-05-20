import { Membre } from "./membre";
import { Session } from "./session";

export interface MembreSession {
  id_membre: Membre;
  id_session: Session;
  mois_encaissement: Date;
  actif: number;
}
