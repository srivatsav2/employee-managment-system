import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AddempComponent } from './addemp/addemp.component';
import { AssginprojectComponent } from './assginproject/assginproject.component';
import { CompaniesComponent } from './companies/companies.component';
import { CcComponent } from './cc/cc.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { UserdeatilsComponent } from './userdeatils/userdeatils.component';
import { PsComponent } from './ps/ps.component';
import { FeedviewComponent } from './feedview/feedview.component';
import { UserlandComponent } from './userland/userland.component';
import { UserassignComponent } from './userassign/userassign.component';
import { UseremployeeComponent } from './useremployee/useremployee.component';
import { UserpsComponent } from './userps/userps.component';
import { UserfeedComponent } from './userfeed/userfeed.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    UserloginComponent,
    UsersignupComponent,
    AdminlandingComponent,
    AddempComponent,
    AssginprojectComponent,
    CompaniesComponent,
    CcComponent,
    EmpdetailsComponent,
    UserdeatilsComponent,
    PsComponent,
    FeedviewComponent,
    UserlandComponent,
    UserassignComponent,
    UseremployeeComponent,
    UserpsComponent,
    UserfeedComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
