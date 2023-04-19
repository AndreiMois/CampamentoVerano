import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  checkboxes: Array<any> | undefined;

  ngOnInit(): void {
    this.checkboxes = [
      { name: 'checkbox1', label: 'Almuno/a CEIPSO Federico García', checked: true },
      { name: 'checkbox2', label: 'Empadronado/a', checked: false },
      { name: 'checkbox3', label: 'Otro', checked: false }
    ];

  }

  updateCheckboxes(checkedCheckbox: any) {
    this.checkboxes!.forEach(checkbox => {
      if (checkbox.name !== checkedCheckbox.name) {
        checkbox.checked = false;
      }
    });
  }

  autorizadoSalirSolo = false;
  nadar = false;
  piscina = false;
  imagenes = false;

}

