import {Component, Input, OnInit} from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  @Input() stream: {
    loading: boolean,
    data: Message[]
  };
  constructor() {}

  ngOnInit() {}
}
