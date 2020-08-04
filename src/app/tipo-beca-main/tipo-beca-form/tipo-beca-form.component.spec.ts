import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBecaFormComponent } from './tipo-beca-form.component';

describe('TipoBecaFormComponent', () => {
  let component: TipoBecaFormComponent;
  let fixture: ComponentFixture<TipoBecaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBecaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBecaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
