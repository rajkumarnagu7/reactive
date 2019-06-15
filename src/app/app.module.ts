import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserformComponent } from './userform/userform.component';
import { ExampleComponent } from './example/example.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    //UserformComponent,
    ExampleComponent,
    UserdetailsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
