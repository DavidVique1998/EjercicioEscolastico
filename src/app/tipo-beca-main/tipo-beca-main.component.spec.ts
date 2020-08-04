import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBecaMainComponent } from './tipo-beca-main.component';

describe('TipoBecaMainComponent', () => {
  let component: TipoBecaMainComponent;
  let fixture: ComponentFixture<TipoBecaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBecaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBecaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
