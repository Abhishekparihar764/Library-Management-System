import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AdminloginComponent } from './register/adminlogin/adminlogin.component';
import { AddbookComponent } from './Dashboard/book/addbook/addbook.component';
import { ManagebookComponent } from './Dashboard/book/managebook/managebook.component'
import { AddmemberComponent } from './Dashboard/Member/addmember/addmember.component';
import { ManagememberComponent } from './Dashboard/Member/managemember/managemember.component';
import { AuthorComponent } from './Dashboard/classification/author/author.component';
import { PublisherComponent } from './Dashboard/classification/publisher/publisher.component';
import { EnquiryComponent } from './Dashboard/enquiry/enquiry.component';
import { IssuebookComponent } from './Dashboard/Loan/issuebook/issuebook.component';
import { IssuedbookComponent } from './Dashboard/Loan/issuedbook/issuedbook.component';
import { SubscriberplansComponent } from './Dashboard/Subscription/subscriberplans/subscriberplans.component';
import { SubscriptionComponent } from './Dashboard/Subscription/subscription/subscription.component';
import { ForgetPasswordComponent } from './register/forget-password/forget-password.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { ThanksComponent } from './register/forget-password/thanks/thanks.component';
import { IndexComponent } from './page/index/index.component';
import { JoinComponent } from './page/index/join/join.component';
import { CollectionComponent } from './page/collection/collection.component';
import { ProfileComponent } from './Dashboard/profile/profile.component';
import { BookrentalComponent } from './page/collection/bookrental/bookrental.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent },
  {path:'adminlogin', component:AdminloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'managebook', component:ManagebookComponent},
  {path: 'addmember', component: AddmemberComponent},
{path:'managemember',component:ManagememberComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'publisher', component: PublisherComponent},
  {path: 'enquiry', component: EnquiryComponent},
  {path: 'issue', component: IssuebookComponent },
  {path: 'issued', component: IssuedbookComponent},
  {path: 'plan', component: SubscriberplansComponent},
  {path: 'History', component: SubscriptionComponent},
 {path:'thanks', component:ThanksComponent},
  {path:'forgotpassword', component: ForgetPasswordComponent},
   {path:'', component:IndexComponent},
   {path:'index', component:IndexComponent},
   {path:'collection', component: CollectionComponent},
   {path:'join', component: JoinComponent},
   {path:'profile',component: ProfileComponent},
   {path: 'bookrental',component: BookrentalComponent },
   {path: 'login', component: AdminloginComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
