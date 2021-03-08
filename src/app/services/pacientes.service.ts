import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL = 'http://localhost:8080/api-ginecologia/';

  constructor(private http: HttpClient) { }

  altaPaciente(paciente){
    return this.http.post(`${this.URL}AltaPaciente.php`, JSON.stringify(paciente));
  }

}
