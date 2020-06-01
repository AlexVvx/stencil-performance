import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
})
export class ButtonsComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  buttons: number[];
  showIndex = [false, false, false];
  startTime: number;
  count = 1;
  maxCount = 3000;

  constructor() {
    this.startTime = Date.now();
  }

  ngOnInit() {
    this.buttons = [...Array(this.count).keys()];
  }

  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: "native buttons",
    },
    {
      data: [],
      label: "web-component buttons",
    },
    {
      data: [],
      label: "angular-material buttons",
    },
    {
      data: [],
      label: "Aw-buttons",
    },
    {
      data: [],
      label: "Aux-buttons",
    },
    {
      data: [],
      label: "ionic-buttons",
    },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left",
        },
      ],
    },
    annotation: {},
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)",
    },
    {
      // red
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "red",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
    {
      // orange
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "orange",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
    {
      // blue
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "blue",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
  ];
  public lineChartLegend = true;
  public lineChartType = "line";

  public buttonButId(index, buttonId, buttonId1 = buttonId) {
    return buttonId1;
  }

  public readyHandler(event, index) {
    if (index === 0) {
      this.lineChartLabels.push(this.count + "");
    }
    if (!this.lineChartData[index].data.length) {
      this.lineChartData[index].data.push(0);
    } else {
      const result = Date.now() - this.startTime;
      this.lineChartData[index].data.push(result);
    }
    if (this.count >= this.maxCount) {
      this.showIndex[index] = false;
      this.count = 1;
      this.showIndex[index + 1] = true;
      return;
    }

    this.showIndex[index] = false;
    setTimeout(() => {
      this.count += 100;
      this.startTime = Date.now();
      this.buttons = [...Array(this.count).keys()];
      this.showIndex[index] = true;
    }, 0);
  }
}
