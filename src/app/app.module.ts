import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HeaderComponent } from './header.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';

import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DropdownDirective } from './messages/dropdown.directive';
import { WindRefService } from './wind-ref.service';
import { AppRoutingModule } from './app-routing-module';
import { DocumentsService } from './documents/documents.service';
import { MessagesService } from './messages/messages.service';
import { ContactService } from './contacts/contact.service';

import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { DndModule} from 'ng2-dnd';
import { HttpClientModule } from '@angular/common/http';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactListComponent,
    HeaderComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentDetailComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DocumentItemComponent,
    DropdownDirective,
    DocumentEditComponent,
    DocumentViewComponent,
    ContactEditComponent,
    ContactsFilterPipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,      
    HttpClientModule,
    DndModule.forRoot() 
  ],
  providers: [WindRefService,ContactService, DocumentsService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
