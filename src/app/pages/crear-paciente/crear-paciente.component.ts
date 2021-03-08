import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  constructor(private pacienteServices: PacientesService){
    this.pacienteServices.altaPaciente();
  }

  ngOnInit(): void {
  }

}
