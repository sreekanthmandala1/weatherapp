import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { ApixuService } from "./apixu.service";
import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { GridOneComponent } from './grid-one/grid-one.component';


@NgModule({
  declarations: [
    AppComponent,
    GridOneComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
