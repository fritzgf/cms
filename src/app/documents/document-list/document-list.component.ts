import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  
  documents: Document[] = [
    new Document('1', 'CIT 260 -', 'Object Oriented Programing', 'https://content.byui.edu/fileb7c3e5ed-6947-497f-9d32-4e5b397cac/1/CIT 260 course description.pdf', null),
    new Document('2', 'CIT 425 -', 'Data Warehouse', 'https://content.byui.edu/fileb7c3e5ed-6947-497f-9d32-4e5b397cac/1/CIT 425 course description.pdf', null),
    new Document('3', 'CIT 366 -', 'Full Web Stack Development', 'https://content.byui.edu/fileb7c3e5ed-6947-497f-9d32-4e5b397cac/1/CIT 366 course description.pdf', null),
    new Document('4', 'CIT 460 -', 'Enterprise Development', 'https://content.byui.edu/fileb7c3e5ed-6947-497f-9d32-4e5b397cac/1/CIT 460 course description.pdf', null),

  ];
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
 }
}
