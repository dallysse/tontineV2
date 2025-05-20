import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Aide } from '../models/aide'
import { TypeAide } from '../models/typeAides';
@Injectable({
  providedIn: 'root'
})

export class AidesServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/';
  aides: any = {};
  listAides: Aide[] = [];
  offenAidesList: Aide[] = [];
  closeAidesList: Aide[] = [];
  public newAide: Aide[] = [];

  constructor(private http: HttpClient) { }

  getTypeAides(): Observable<{ data: TypeAide[] }> {
    return this.http.get<{ data: TypeAide[] }>(this.apiUrl + 'typeAides');
  }

  getAides(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.apiUrl + 'sessionAides');
  }

  registerAide(formData: object) {
    return this.http.post(this.apiUrl + 'aide/create', formData);
  }


  fetchAides() {
    this.getAides().subscribe((data) => {
      this.aides = data;
      for (let aide of this.aides) {
        this.listAides.push(aide)
        if (aide.date_versement == null) {
          this.offenAidesList.push(aide);
        }
        else {
          this.closeAidesList.push(aide);
        }

      }
    });
  }

  getlistAides(): Aide[] {
    return this.listAides
  }



}

