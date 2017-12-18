import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss', '../clients-panel/clients-panel.component.scss']
})

export class ClientComponent implements OnInit {

  @Input() client: { id: number, first_name: string };


  @Output() qwerty = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showChat() {
    this.qwerty.emit(this.client);
  }

}
