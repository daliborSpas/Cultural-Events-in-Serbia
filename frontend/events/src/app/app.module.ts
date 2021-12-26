import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { RegistrationComponent } from './registration/registration.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ContactComponent } from './contact/contact.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TermsComponent } from './terms/terms.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OrganizationComponent } from './organization/organization.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    SetNewPasswordComponent,
    ContactComponent,
    OrganizationProfileComponent,
    NavComponent,
    HomeComponent,
    TermsComponent,
    MainNavComponent,
    OrganizationComponent,
    EventCardComponent,
    EventsPageComponent,
    AddEventComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
