import {Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: "app-web-buttons",
  templateUrl: "./web-buttons.component.html",
  styleUrls: ["./web-buttons.component.scss"],
})
export class WebButtonsComponent implements OnInit, AfterViewInit {
  buttons: number[];
  @Input() numberOfButtons = 10;
  @Output() componentRendered = new EventEmitter<void>();

  constructor() {
    console.time("web-buttons render");
  }

  ngOnInit() {
    this.buttons = [...Array(this.numberOfButtons).keys()];
  }

  ngAfterViewInit(): void {
    console.timeEnd("web-buttons render");
    setTimeout(() => {
      this.componentRendered.emit();
    }, 0);
  }
}
