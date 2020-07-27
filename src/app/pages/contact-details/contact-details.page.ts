import { Component, OnInit } from '@angular/core';
import { Contacts, Contact } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  myContacts:Contact[]=[];
  
  constructor(private contacts:Contacts) { }

  ngOnInit() {
  }

  loadContacts(){
    let options={
      filter:'',
      multiple:true,
      hasPhoneNumber:true
    };
    this.contacts.find(['*'],options).then((contacts:Contact[])=>{
      this.myContacts=contacts; 
    })
  }

}
