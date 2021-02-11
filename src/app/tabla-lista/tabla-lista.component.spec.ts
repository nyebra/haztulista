import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListaComponent } from './tabla-lista.component';

describe('TablaListaComponent', () => {
  let component: TablaListaComponent;
  let fixture: ComponentFixture<TablaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
