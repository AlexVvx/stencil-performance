import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aw-buttons",
  templateUrl: "./aw-buttons.component.html",
  styleUrls: ["./aw-buttons.component.scss"],
})
export class AwButtonsComponent implements OnInit {
  buttons: number[];

  constructor() {
    console.time('aw-button render time');
  }

  ngOnInit() {
    this.buttons = [...Array(10).keys()];
  }

  buttonButId(index, buttonId, buttonId1 = buttonId) {
    return buttonId1;
  }

  readyHandler(event) {
    console.timeEnd('aw-button render time');
  }
}
