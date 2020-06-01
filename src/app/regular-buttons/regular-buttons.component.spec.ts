import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularButtonsComponent } from './regular-buttons.component';

describe('RegularButtonsComponent', () => {
  let component: RegularButtonsComponent;
  let fixture: ComponentFixture<RegularButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
