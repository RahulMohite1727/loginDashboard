import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegFormComponent } from './reg-form/reg-form.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    RegFormComponent,
    TableComponent,
    NavbarComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModuleModule { }
