import { MembreSession } from "./membreSession";
import { TypeAide } from "./typeAides";

export interface Aide {
  id_aide: number;
  membreSession: MembreSession;
  type_aide: TypeAide;
  date_versement: Date;
  date_ouverture_aide: Date;
  Date_butoire: Date;
  commentaire: string;
}

