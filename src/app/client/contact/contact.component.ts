import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactserv:ContactService,private fb:FormBuilder) { }
  lescontacts!:Contact[];
  contactForm!:FormGroup;
  ngOnInit(): void {

    this.contactserv.getcontact().subscribe(
      data => this.lescontacts = data)
    this.createForm();
  }

  createForm(){
    this.contactForm = this.fb.nonNullable.group({
      nometprenom:["",[Validators.required,Validators.pattern('^[A-Z][a-z]$')]],
      email:["",[Validators.required]],
      sujet: [""],
      message: [""]

    })
  }


  ajoutercontact(){
    this.contactserv.addcontact(this.contactForm.value).subscribe(
      contact=> this.lescontacts.push(contact)
    )
    console.log(this.contactForm.value);
  }

}
