import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './authorization/authorization.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'workflow', component: WorkflowComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
