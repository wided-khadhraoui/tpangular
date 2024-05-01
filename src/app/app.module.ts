import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component'; // Importez le composant DataBindingComponent

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent // Ajoutez votre composant DataBindingComponent ici
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
