import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {UiModule} from "./ui/ui.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    UiModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
