import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { JoinEventComponent } from './events/join-event/join-event.component';
import { EventService } from './events/event.service';
import { AppliedComponent } from './notifications/applied/applied.component';
import { InterestedComponent } from './notifications/interested/interested.component';
import { FinishedComponent } from './notifications/finished/finished.component';
import { SuccessComponent } from './auth/success/success.component';
import { MatPaginatorIntl } from '@angular/material';
import { MatPaginatorIntlSrb } from './paginator';
import { RateComponent } from './notifications/rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent,
    NotificationsComponent,
    EventsComponent,
    NewEventComponent,
    EditEventComponent,
    JoinEventComponent,
    AppliedComponent,
    InterestedComponent,
    FinishedComponent,
    SuccessComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, EventService, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSrb}],  
  bootstrap: [AppComponent],
  entryComponents: [JoinEventComponent, EditEventComponent, SuccessComponent, RateComponent]
})
export class AppModule { }
