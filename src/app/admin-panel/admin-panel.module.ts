import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendComponent } from './backend/backend.component';


@NgModule({
  declarations: [LoginComponent, BackendComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPanelRoutingModule
  ],
  exports: [LoginComponent]
})
export class AdminPanelModule { }
