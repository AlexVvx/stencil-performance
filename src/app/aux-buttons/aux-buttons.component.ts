import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: "app-aux-buttons",
  templateUrl: "./aux-buttons.component.html",
  styleUrls: ["./aux-buttons.component.scss"],
})
export class AuxButtonsComponent implements OnInit, DoCheck {
  buttons: number[];

  constructor() {
    console.time("aux-buttons render");
  }

  ngOnInit() {
    this.buttons = [...Array(10).keys()];
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  buttonButId(index, buttonId, buttonId1 = buttonId) {
    return buttonId1;
  }

  readyHandler(event) {
    console.timeEnd("aux-buttons render");
  }
}
