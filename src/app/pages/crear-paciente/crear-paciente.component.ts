import { Component } from "@angular/core";
import { PacientesService } from "../../services/pacientes.service";

@Component({
  selector: "app-crear-paciente",
  templateUrl: "./crear-paciente.component.html",
  styleUrls: ["./crear-paciente.component.css"],
})
export class CrearPacienteComponent {
  paciente = {};

  constructor(private pacienteServices: PacientesService) {}

  AltaPaciente() {
    this.pacienteServices.altaPaciente(this.paciente).subscribe((resp) => {
      if (resp["resultado"] == "OK") {
        console.log("Registro Exitoso");
      }
    });
  }
}
