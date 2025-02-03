export interface Pret {
    nom: string;
    prenom: string;
    type_aide: string;
    montant: number;
    date_pret: Date;
    date_remboursement: Date;
    id_membre: number;
    duree: number;
    interet_generer: number;
  }
