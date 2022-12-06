import { EmailValidator } from "@angular/forms";

export class Contact {
    constructor(public nometprenom:String,
        public email:EmailValidator,
        public sujet:String,
        public message:String )
        {

        }
}
