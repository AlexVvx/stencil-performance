import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ionic-buttons",
  templateUrl: "./ionic-buttons.component.html",
  styleUrls: ["./ionic-buttons.component.scss"],
})
export class IonicButtonsComponent implements OnInit {
  buttons: number[];

  constructor() {
    console.time("ionic-buttons render");
  }

  ngOnInit() {
    this.buttons = [...Array(10).keys()];
  }

  buttonButId(index, buttonId, buttonId1 = buttonId) {
    return buttonId1;
  }

  readyHandler(event) {
    console.timeEnd("ionic-buttons render");
  }
}
