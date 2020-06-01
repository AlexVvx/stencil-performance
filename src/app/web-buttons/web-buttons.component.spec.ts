import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebButtonsComponent } from './web-buttons.component';

describe('WebButtonsComponent', () => {
  let component: WebButtonsComponent;
  let fixture: ComponentFixture<WebButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
