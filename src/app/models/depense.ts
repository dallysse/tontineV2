import { Rencontre } from "./rencontre";

export interface Depense {
  id_depense: number;
  rencontre: Rencontre;
  motif_depense: string;
  montant_depense: number;
}
