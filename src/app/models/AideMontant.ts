import { Session } from "./session";
import { TypeAide } from "./typeAides";

export interface AideMontant {
  id_aide_montant: number;
  type_aide: TypeAide;
  session: Session;
  montant: number;
}
