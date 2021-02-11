import { Component, Input } from '@angular/core';
import { Producto} from '../clases/Producto';

@Component({
  selector: 'app-tabla-lista',
  templateUrl: './tabla-lista.component.html',
  styleUrls: ['./tabla-lista.component.css']
})

export class TablaListaComponent{
  @Input() productos: Array<Producto>;

  displayProducto(producto: Producto) {
    console.log(producto);
  }
}

