import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [AppComponent, MyCompComponent],
  imports: [BrowserModule, FormsModule, DxButtonModule, DxTextBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
