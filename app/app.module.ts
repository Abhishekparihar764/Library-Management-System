import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './page/index/index.component';
import { AdminloginComponent } from './register/adminlogin/adminlogin.component';
import { AddbookComponent } from './Dashboard/book/addbook/addbook.component';
import { ManagebookComponent } from './Dashboard/book/managebook/managebook.component';
import { AuthorComponent } from './Dashboard/classification/author/author.component';
import { PublisherComponent } from './Dashboard/classification/publisher/publisher.component';
import { EnquiryComponent } from './Dashboard/enquiry/enquiry.component';
import { IssuebookComponent } from './Dashboard/Loan/issuebook/issuebook.component';
import { IssuedbookComponent } from './Dashboard/Loan/issuedbook/issuedbook.component';
import { AddmemberComponent } from './Dashboard/Member/addmember/addmember.component';
import { ManagememberComponent } from './Dashboard/Member/managemember/managemember.component';
import { SubscriptionComponent } from './Dashboard/Subscription/subscription/subscription.component';
import { SubscriberplansComponent } from './Dashboard/Subscription/subscriberplans/subscriberplans.component';
import { ForgetPasswordComponent } from './register/forget-password/forget-password.component';
import { CollectionComponent } from './page/collection/collection.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { ThanksComponent } from './register/forget-password/thanks/thanks.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinComponent } from './page/index/join/join.component';
import { ProfileComponent } from './Dashboard/profile/profile.component';
import { BookrentalComponent } from './page/collection/bookrental/bookrental.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AdminloginComponent,
    AddbookComponent,
    ManagebookComponent,
    AuthorComponent,
    PublisherComponent,
    EnquiryComponent,
    IssuebookComponent,
    IssuedbookComponent,
    AddmemberComponent,
    ManagememberComponent,
    SubscriptionComponent,
    SubscriberplansComponent,
    ForgetPasswordComponent,
    CollectionComponent,
    AdminComponent,
    ThanksComponent,
    JoinComponent,
    ProfileComponent,
    BookrentalComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
