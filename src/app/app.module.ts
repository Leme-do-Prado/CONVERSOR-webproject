import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleConversorComponent } from './title-conversor/title-conversor.component';
import { DescriptionConversorComponent } from './description-conversor/description-conversor.component';
import { ConversorComponent } from './conversor/conversor.component';
import { CopyrightComponentComponent } from './copyright-component/copyright-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleConversorComponent,
    DescriptionConversorComponent,
    ConversorComponent,
    CopyrightComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
