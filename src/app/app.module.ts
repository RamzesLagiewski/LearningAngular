import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { provideRoutes, ROUTES} from "@angular/router";
import { DataService } from './data.service'; 
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule,RouterLink } from '@angular/router';
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, RouterModule],
  providers: [/*DataService*/],
  bootstrap: [AppComponent]
})
export class AppModule {}
