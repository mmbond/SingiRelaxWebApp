import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { EventsComponent } from './events/events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewEventComponent } from './events/new-event/new-event.component';

const rute: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'events', component: EventsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'new-event', component: NewEventComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]

})

export class RoutingModule { }