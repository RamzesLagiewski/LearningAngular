import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { provideRoutes, Router} from "@angular/router";
import { DataService } from './data.service'; 
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, AppRoutingModule],  
  declarations: [AppComponent, routingComponents],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}