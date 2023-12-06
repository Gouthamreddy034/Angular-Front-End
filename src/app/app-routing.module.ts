import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './request-form/request-form.component';
import { SubmittedRequestsComponent } from './submitted-requests/submitted-requests.component';

const routes: Routes = [
  {path:'requestForm',component:RequestFormComponent},
  {path:'data',component:SubmittedRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
