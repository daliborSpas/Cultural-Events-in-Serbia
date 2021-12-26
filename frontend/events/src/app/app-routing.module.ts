import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ContactComponent } from './contact/contact.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'resetpass', component: ResetPasswordComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'setnewpassword/:username', component: SetNewPasswordComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'getUserData', component: OrganizationProfileComponent},
  {path: 'organization', component: OrganizationComponent},
  {path: 'event/:id', component: EventsPageComponent},
  {path: 'events', component: EventCardComponent},
  {path: 'addEvent', component: AddEventComponent},
  {path: 'admin', component: AdminBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
