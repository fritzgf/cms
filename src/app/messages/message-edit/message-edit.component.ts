import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
import { ContactService } from 'src/app/contacts/contact.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
  providers: [MessagesService, ContactService]
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject', { static: false }) subjectInput: ElementRef;
  @ViewChild('msgText', { static: false }) messageInput: ElementRef;
 // msgText: ElementRef;

  //@Output() addMessageEvent = new EventEmitter<Message>();

  currentSender = "Frit";

  constructor(private messagesService: MessagesService, private contactService: ContactService) {}

  ngOnInit() {}
  onSendMessage() {
    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.messageInput.nativeElement.value;
    const newMessage = new Message('', subject, msgText, this.currentSender)
    this.messagesService.addMessage(newMessage);
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.messageInput.nativeElement.value = '';
  }

}