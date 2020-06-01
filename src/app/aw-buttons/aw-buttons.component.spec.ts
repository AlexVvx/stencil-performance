import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwButtonsComponent } from './aw-buttons.component';

describe('AwButtonsComponent', () => {
  let component: AwButtonsComponent;
  let fixture: ComponentFixture<AwButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
