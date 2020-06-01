import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxButtonsComponent } from './aux-buttons.component';

describe('AuxButtonsComponent', () => {
  let component: AuxButtonsComponent;
  let fixture: ComponentFixture<AuxButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
