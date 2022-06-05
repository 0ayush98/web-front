import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'edit',component:EditComponent },
  {path: 'home',component:HomeComponent},
  {path: ' ', redirectTo: 'HomeComponent', pathMatch: "full"},
  {path: 'logout',component: LogoutComponent},
  {path: 'contactus',component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
