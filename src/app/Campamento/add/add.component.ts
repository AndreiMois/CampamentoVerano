import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  checkboxes: Array<any> | undefined;
  ngOnInit() {

  this.checkboxes = [
    { name: 'checkbox1', value: "Almuno/a CEIPSO Federico García", label: 'Almuno/a CEIPSO Federico García', checked: true },
    { name: 'checkbox2', value: "Empadronado/a", label: 'Empadronado/a', checked: false },
    { name: 'checkbox3', value: "Otro", label: 'Otro', checked: false }
  ];
  }


  persona: Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) {
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona)
      .subscribe(data => {
        console.log(persona);
        alert("Se agrego con exito");
        this.router.navigate(["listar"]);
      })
  }

  updateCheckboxes(checkedCheckbox: any) {
    this.checkboxes!.forEach(checkbox => {
      if (checkbox.name !== checkedCheckbox.name) {
        checkbox.checked = false;
      }
    });
  }
}


