import { Contact } from '../contacts/contact.model';

export class Message {
    constructor(
       
        public messageId: string,
        public subject: string,
        public msgText: string,
        public sender: string
    ) { }
}