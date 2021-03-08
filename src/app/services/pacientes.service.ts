import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL = "Estoy en el servicio";

  constructor(private http: HttpClient) { }

  altaPaciente(){
    console.log(`${this.URL}`)
  }

}
