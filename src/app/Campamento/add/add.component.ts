import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

interface Option {
  name: string;
  label: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  selectedOption: string;

  onOptionSelected(event: any) {
    // Desmarcamos todas las opciones excepto la seleccionada
    const checkboxes = document.getElementsByName('option');
    checkboxes.forEach((checkbox: HTMLInputElement) => {
      if (checkbox.value !== event.target.value) {
        checkbox.checked = false;
      }
    });
    // Guardamos la opción seleccionada
    this.selectedOption = event.target.value;
  }

  ngOnInit() {
  }

  persona: Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) {
  }

  Guardar(persona: Persona) {
    persona.empadronamiento = this.selectedOption;
    this.service.createPersona(persona)
      .subscribe(data => {
        console.log(persona);
        alert("Se agrego con exito");
        this.router.navigate(["listar"]);
      })
  }
}





