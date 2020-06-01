import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicButtonsComponent } from './ionic-buttons.component';

describe('IonicButtonsComponent', () => {
  let component: IonicButtonsComponent;
  let fixture: ComponentFixture<IonicButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
