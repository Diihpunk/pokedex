import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDetailComponent } from './pokedex-page/dialog-detail/dialog-detail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CapitalizeFirstLetterPipe } from './shared/tools/pipe-custom/capitalize-first-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    DialogDetailComponent,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
