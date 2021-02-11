import { Component, Output, EventEmitter } from '@angular/core';
import { Producto} from '../clases/Producto';

@Component({
  selector: 'app-form-entrada',
  templateUrl: './form-entrada.component.html',
  styleUrls: ['./form-entrada.component.css']
})
export class FormEntradaComponent  {
  title = 'entrada';
  model: Producto = new Producto(0, '', 0, '');
  @Output() onsubmit = new EventEmitter<any>();

  public submit(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model = new Producto(0, '', 0, '');
  }

}
