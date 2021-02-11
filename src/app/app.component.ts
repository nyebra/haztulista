import { Component, OnInit } from '@angular/core';
import {Producto} from './clases/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent implements OnInit {
  productos: Array<Producto> = [];


  ngOnInit() {
    this.productos.push(new Producto(1, 'patatas', 3, 'fruta'));
    this.productos.push(new Producto(2, 'patatas', 3, 'fruta'));
  }

  guardar(model: Producto){
    let v = Math.max.apply(Math, this.productos.map(function(o){return o.id}));
    model.id = ++v;
    this.productos.push(model);
  }

}






