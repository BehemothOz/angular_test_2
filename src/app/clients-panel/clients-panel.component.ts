import { Component, OnInit } from '@angular/core';
import { clients } from '../clients'

@Component({
  selector: 'app-clients-panel',
  templateUrl: './clients-panel.component.html',
  styleUrls: ['./clients-panel.component.scss']
})
export class ClientsPanelComponent implements OnInit {

  incomingClient = clients;

  constructor() { }

  ngOnInit() {
  }

  qwerty(client) {
    console.log(client);
  }

}
