import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantidades',
  templateUrl: './cantidades.component.html',
  styleUrls: ['./cantidades.component.css']
})
export class CantidadesComponent  {
  title = 'angularbootstrap';
  inputnumber = 0;

  plus()
  {
    this.inputnumber = this.inputnumber + 1;
  }
  minus()
  {
    if (this.inputnumber !== 0)
    {
      this.inputnumber = this.inputnumber - 1;
    }

  }
}
