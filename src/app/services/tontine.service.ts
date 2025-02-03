import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Aide }  from '../models/aide'
import { Pret } from '../models/pret'
import { Membre } from '../models/membre'
import { Reunion } from '../models/reunion';
import { Depense } from '../models/depense';
import { FondCaisses } from '../models/fondCaisse';
import { Sanction } from '../models/sanction';
import { TypeAide } from '../models/typeAides';



@Injectable({
  providedIn: 'root'
})
export class TontineService{

  public aide: Aide[] = [];
  public pret: Pret[] = [];
  public membre: Membre[] = [];

  membres: any[] = [];

  fonds: any[] = [];
  total_fonds: number = 0;

  total_fonds_disponible: number = 0;
  total_fonds_caisse: number = 0;

  prets: any[] = [];
  total_prets_non_rembourser: number = 0;
  total_interet_generer: number = 0;

  total_depenses: number = 0;
  depenses: any[] = [];

  sanctions: any[] = [];
  total_sanctions: number = 0;

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }


  listReunions(): Observable<{ data: Reunion[] }> {
    return this.http
      .get<{ data: Reunion[] }> (this.apiUrl + 'sessions');
  }

  listSessionRencontres(): Observable<{ data: Reunion[] }> {
    return this.http
      .get<{ data: Reunion[] }> (this.apiUrl + 'sessionRencontres');
  }

  getSessionRencontre(id:any): Observable<{ data: Reunion[] }> {
    return this.http
      .get<{ data: Reunion[] }> (this.apiUrl + 'sessionRencontre/'+id);
  }

  getReunion(id:any): Observable<{ data: Reunion[] }> {
    return this.http
      .get<{ data: Reunion[] }> (this.apiUrl + 'session/'+id);
  }

  getSessionMembers(): Observable<{ data: any[] }> {
    return this.http
      .get<{ data: any[] }> (this.apiUrl + 'sessionMembres');
  }

  listMembres(): Observable<{ data: Membre[] }> {
    return this.http
      .get<{ data: Membre[] }> (this.apiUrl + 'membres');
  }

  listMembresS(): Observable<{ data: Membre[] }> {
    return this.http
      .get<{ data: Membre[] }> (this.apiUrl + 'sessionMembres');
  }

  getMembre(id:any): Observable<{ data: Membre[] }> {
    return this.http
      .get<{ data: Membre[] }>(this.apiUrl + 'membre/'+id);
  }

  listMembresPresent(): Observable<{ data: Membre[] }> {
    return this.http
      .get<{ data: Membre[] }> (this.apiUrl + 'presence');
  }

  getPrets(): Observable<{ data: any[] }> {
    return this.http
      .get<{ data: any[] }>(this.apiUrl + 'sessionPrets')
  }


  getSanctions(): Observable<{ data: Sanction[] }>  {
    return this.http
      .get<{ data: Sanction[] }>(this.apiUrl + 'sanctions')
  }

  getFonds(): Observable<{ data: FondCaisses[] }>  {
    return this.http
      .get<{ data: FondCaisses[] }>(this.apiUrl + 'fondDeCaisses')
  }

  getDepenses(): Observable<{ data: Depense[] }>  {
    return this.http
      .get<{ data: Depense[] }>(this.apiUrl +  'depenses')
  }

  getTypeAides(): Observable<{ data: TypeAide[] }> {
    return this.http.get<{ data: TypeAide[] }>(this.apiUrl + 'typeAides');
  }

  getAides(): Observable<{ data: Aide[] }> {
    return this.http.get<{ data: Aide[] }>(this.apiUrl + 'sessionAides');
  }

  registerAide(formData: object) {
    return this.http.post(this.apiUrl +  'aide/create', formData);
  }

  registerPret(formData: object) {
    return this.http.post(this.apiUrl + 'pret/create', formData);
  }

  registerDepense(formData: object) {
    return this.http.post(this.apiUrl + 'depense/create', formData);
  }

  deletePret(id:any) {
    return this.http.delete<any[]>(this.apiUrl + 'pret/'+id);
  }
}
