import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkflowComponent } from './workflow/workflow.component';
import { ClientsPanelComponent } from './clients-panel/clients-panel.component';
import { ClientComponent } from './client/client.component';
import { ChatsPanelComponent } from './chats-panel/chats-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    WorkflowComponent,
    ClientsPanelComponent,
    ClientComponent,
    ChatsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
