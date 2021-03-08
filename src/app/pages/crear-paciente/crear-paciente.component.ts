import { Component } from "@angular/core";
import { PacientesService } from "../../services/pacientes.service";

@Component({
  selector: "app-crear-paciente",
  templateUrl: "./crear-paciente.component.html",
  styleUrls: ["./crear-paciente.component.css"],
})
export class CrearPacienteComponent {
  pacientes = {};

  constructor(private pacienteServices: PacientesService) {}

  AltaPaciente() {

    console.log(this.pacientes);

    // this.pacienteServices.altaPaciente(this.pacientes).subscribe((resp) => {
    //   if (resp["resultado"] == "OK") {
    //     console.log("Registro Exitoso");
    //   }
    // });
  }
}
