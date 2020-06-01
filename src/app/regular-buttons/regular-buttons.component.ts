import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-regular-buttons",
  templateUrl: "./regular-buttons.component.html",
  styleUrls: ["./regular-buttons.component.scss"],
})
export class RegularButtonsComponent implements OnInit, AfterViewInit {
  buttons: number[];
  @Input() numberOfButtons = 10;
  @Output() componentRendered = new EventEmitter<void>();

  constructor() {
    console.time("regular-buttons render");
  }

  ngOnInit() {
    this.buttons = [...Array(this.numberOfButtons).keys()];
  }

  ngAfterViewInit(): void {
    console.timeEnd("regular-buttons render");
    setTimeout(() => {
      this.componentRendered.emit();
    }, 0);
  }
}
