import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBecaListComponent } from './tipo-beca-list.component';

describe('TipoBecaListComponent', () => {
  let component: TipoBecaListComponent;
  let fixture: ComponentFixture<TipoBecaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBecaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBecaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
