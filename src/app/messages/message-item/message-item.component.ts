import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css'],
  providers: [ContactService]
})

export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  messageSender: string = '';
  canEdit: Boolean = false;
  
  constructor(private contactService: ContactService) { }
  ngOnInit() {
   // let contact: Contact = this.contactService.getContact(this.message.sender);
   //this.messageSender = contact.name
   //this.messageSender = this.message.sender.name
  }
}
