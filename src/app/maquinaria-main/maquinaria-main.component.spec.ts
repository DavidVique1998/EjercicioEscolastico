import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaMainComponent } from './maquinaria-main.component';

describe('MaquinariaMainComponent', () => {
  let component: MaquinariaMainComponent;
  let fixture: ComponentFixture<MaquinariaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinariaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
