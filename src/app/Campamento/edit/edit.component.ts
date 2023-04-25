import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  persona: Persona = new Persona;

  constructor(private router: Router, private service: ServiceService) { }
  selectedOption: string;

  onOptionSelected(event: any) {
    const checkboxes = document.getElementsByName('option');
    checkboxes.forEach((checkbox: HTMLInputElement) => {
      if (checkbox.value !== event.target.value) {
        checkbox.checked = false;
      }
    });
    this.selectedOption = event.target.value;
  }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Actualizar(persona: Persona) {
    if (this.selectedOption) {
      persona.empadronamiento = this.selectedOption;
    }
    this.service.updatePersona(persona)
      .subscribe(data => {
        console.log(persona);
        this.persona = data;
        alert("Se ha actualizado con éxito");
        this.router.navigate(["listar"])
      })
  }

}
