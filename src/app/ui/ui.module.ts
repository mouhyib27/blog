import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "../shared/header/header.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    FlexLayoutModule,
    NgbCollapseModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class UiModule { }
