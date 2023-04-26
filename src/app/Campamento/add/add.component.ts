import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
        alert("Se agrego con exito");
        this.router.navigate(["listar"]);
      })
  }

  event: any
  totalSum: number = 0;

  updateTotalSum(event: any) {
    const checkboxValue = parseInt(event.target.value);
    if (event.target.checked) {
      this.totalSum += checkboxValue;
      this.persona.importe = this.totalSum;
    } else {
      this.totalSum -= checkboxValue;
      this.persona.importe = this.totalSum;
    }
  }
  
  restaTotal(event: any, porcentaje: number) {
    let totalResta: number = 0;
    if (event.target.checked) {
      document.getElementsByName("turno").forEach((item, index) => {
        // @ts-ignore
        if (item.checked) {
          // @ts-ignore
          let parseado = parseInt(item.value);
          if (parseado >= 70) {
            // @ts-ignore
            totalResta += item.value - (25 * (porcentaje / 100));
          } else if (parseado >= 56 && parseado < 70) {
            // @ts-ignore
            totalResta += item.value - (20 * (porcentaje / 100));;
          } else if (parseado >= 56 && parseado < 70) {
            // @ts-ignore
            totalResta += item.value - (15 * (porcentaje / 100));;
          }
        }
      })
    } else {
      document.getElementsByName("turno").forEach((item, index) => {
        // @ts-ignore
        if (item.checked) {
          // @ts-ignore
          totalResta += parseInt(item.value)
        }
      })
    }
    this.totalSum = totalResta;
  }
}





