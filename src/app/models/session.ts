export interface Session {
  id_session: number;
  session_debut: Date;
  session_fin: Date;
  montant_fond_caisse: number;
  montant_tontine: number;
  montant_collation: number;
  bilan: string;
}
