import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './auth-module/reg-form/reg-form.component';
import { TableComponent } from './auth-module/table/table.component';
import { NavbarComponent } from './auth-module/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatToolbarModule, MatCardModule, MatMenuModule, MatDialogModule, MatSortModule, MatProgressSpinnerModule, MatPaginatorModule, MatCheckboxModule, MatRippleModule, MatStepperModule, MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatGridListModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatTooltipModule, MatTreeModule, } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRippleModule,
    MatPaginatorModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatExpansionModule,
  ],
  declarations: [],
})
export class MaterialModule { }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
