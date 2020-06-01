import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.scss']
})
export class MaterialButtonsComponent implements OnInit, AfterViewInit {
  buttons: number[];
  @Input() numberOfButtons = 10;
  @Output() componentRendered = new EventEmitter<void>();

  constructor() {
    console.time("material-buttons render");
  }

  ngOnInit() {
    this.buttons = [...Array(this.numberOfButtons).keys()];
  }

  ngAfterViewInit(): void {
    console.timeEnd("material-buttons render");
    setTimeout(() => {
      this.componentRendered.emit();
    }, 0);
  }

  buttonButId(index, buttonId, buttonId1 = buttonId) {
    return buttonId1;
  }
}
