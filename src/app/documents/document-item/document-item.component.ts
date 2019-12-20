import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService} from '../documents.service';
@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css'],
  providers: [DocumentsService]
})
export class DocumentItemComponent implements OnInit {
    @Input() document: Document;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {

 }
}