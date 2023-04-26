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
        this.persona = data;
        alert("Se ha actualizado con éxito");
        this.router.navigate(["listar"])
      })
  }

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

  totalSum: number = 0;
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
