import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert: string= "This is required"
  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''   //To add the checkbox
    });

  }

  // TO CREATE THE POST OPERATION i.e TO POST THE DATA ENTERED IN FORM TO CONNECT THE BACKEND
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }
}
