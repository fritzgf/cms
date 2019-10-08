import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject', { static: true })
  subject: ElementRef;

  @ViewChild('msgText', { static: true })
  msgText: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender = 'Fritz';

  constructor() {}

  ngOnInit() {}

  onSendMessage() {
    const sendSubject = this.subject.nativeElement.value;
    const sendMsgText = this.msgText.nativeElement.value;

    const sendMessage = new Message(
      '1',
      sendSubject,
      sendMsgText,
      this.currentSender
    );

    this.addMessageEvent.emit(sendMessage);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }

}
