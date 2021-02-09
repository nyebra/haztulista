import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 3, name: 'Hydrogen', weight: "Café"},
  {position: 2, name: 'Helium', weight: "Café"},
  {position: 3, name: 'Lithium', weight: "Café"},
  {position: 1, name: 'Beryllium', weight: "Café"},
  {position: 1, name: 'Boron', weight: "Café"},
  {position: 2, name: 'Carbon', weight: "Café"},
  {position: 7, name: 'Nitrogen', weight: "Café"},
  {position: 3, name: 'Oxygen', weight: "Café"},
  {position: 2, name: 'Fluorine', weight: "Café"},
  {position: 1, name: 'Neon', weight: "Café"},
];

@Component({
  selector: 'app-tabla-lista',
  templateUrl: './tabla-lista.component.html',
  styleUrls: ['./tabla-lista.component.css']
})
export class TablaListaComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


