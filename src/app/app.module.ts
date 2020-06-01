import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector } from "@angular/core";
import { AladdinAngularComponentsModule } from "@blk/aladdin-angular-components";
import { IonicModule } from "@ionic/angular";
import { ChartsModule } from "ng2-charts";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegularButtonsComponent } from "./regular-buttons/regular-buttons.component";
import { AuxButtonsComponent } from "./aux-buttons/aux-buttons.component";
import { AwButtonsComponent } from "./aw-buttons/aw-buttons.component";
import { WebButtonsComponent } from "./web-buttons/web-buttons.component";
import { IonicButtonsComponent } from "./ionic-buttons/ionic-buttons.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegularButtonsComponent,
    AuxButtonsComponent,
    AwButtonsComponent,
    WebButtonsComponent,
    IonicButtonsComponent,
    ButtonsComponent,
    MaterialButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AladdinAngularComponentsModule,
    ChartsModule,
    MatButtonModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    class WebButton extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        button.textContent = "test";
        shadow.appendChild(button);
      }
    }
    customElements.define("web-button", WebButton);
  }
}
