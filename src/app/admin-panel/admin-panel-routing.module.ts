import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth_guard.service';
import { BackendComponent } from './backend/backend.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'panel',
    component: BackendComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    redirectTo: 'panel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
