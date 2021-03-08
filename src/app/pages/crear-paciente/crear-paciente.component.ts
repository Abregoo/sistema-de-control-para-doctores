import { Component } from "@angular/core";
import { PacientesService } from "../../services/pacientes.service";

@Component({
  selector: "app-crear-paciente",
  templateUrl: "./crear-paciente.component.html",
  styleUrls: ["./crear-paciente.component.css"],
})
export class CrearPacienteComponent {
  pacientes = {};

  constructor(private pacientesServices: PacientesService) {}

  AltaPaciente() {
    this.pacientesServices.altaPaciente(this.pacientes).subscribe(resp => {
      if ((resp["resultado"] = "OK")) {
        console.log("Resgistro exitoso");
      }
    });
  }
}
