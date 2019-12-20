import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { ContactService } from '../contacts/contact.service';



@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageChangeEvent = new EventEmitter<Message[]>();
  messages : Message[] = [];

  constructor(private contactService: ContactService) {
    this.messages = MOCKMESSAGES; 
  }
  
  getMessages(id: string) : Message {

    for(const message of this.messages)
      {
      if(message.messageId === id)
      {
        return message;

      }
      return null;
     }
      
     }
        getMessage(): Message[]{
        return this.messages.slice();
    }
    addMessage(message: Message) {
      if (!message) {
        return;
      }
  }
}