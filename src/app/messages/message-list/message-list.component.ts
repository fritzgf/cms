import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message(
      '1',
      'do you need help?',
      'Please schedule appointment.',
      'Bro. Jackson'
    ),
    new Message(
      '2',
      'Meet me tomorrow',
      'We can discuss about the topic.',
      'Bro. Roberson'
    ),
    new Message(
      '3',
      'Meeting',
      'Please email me.',
      'John'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onAddMessage(message: Message) {
    console.log(message);
    this.messages.push(message);
  }
}