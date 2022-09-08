import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AssginprojectComponent } from './assginproject/assginproject.component';
import { CcComponent } from './cc/cc.component';
import { CompaniesComponent } from './companies/companies.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HomeComponent } from './components/home/home.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { FeedviewComponent } from './feedview/feedview.component';
import { PsComponent } from './ps/ps.component';
import { UserassignComponent } from './userassign/userassign.component';
import { UserdeatilsComponent } from './userdeatils/userdeatils.component';
import { UseremployeeComponent } from './useremployee/useremployee.component';
import { UserfeedComponent } from './userfeed/userfeed.component';
import { UserlandComponent } from './userland/userland.component';
import { UserpsComponent } from './userps/userps.component';

const routes: Routes = [
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'userlogin', component:UserloginComponent},
  {path: 'usersignup', component:UsersignupComponent},
  {path: 'adminland', component:AdminlandingComponent},
  {path: 'addemp', component:AddempComponent},
  {path: 'assign', component:AssginprojectComponent},
  {path: 'companies', component:CompaniesComponent},
  {path: 'cc', component:CcComponent},
  {path: 'empdetails', component:EmpdetailsComponent},
  {path: 'userdetails', component:UserdeatilsComponent},
  {path: 'ps', component:PsComponent},
  {path: 'feedview', component:FeedviewComponent},
  {path: 'userland', component:UserlandComponent},
  {path: 'userassign', component:UserassignComponent},
  {path: 'useremp', component:UseremployeeComponent},
  {path: 'ups', component:UserpsComponent},
  {path: 'userfeed', component:UserfeedComponent}

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
