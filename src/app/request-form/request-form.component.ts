import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Assesment } from '../assesment';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  assesment!: Assesment;
  signupForm!: FormGroup;
  applications = ["MFM","FLMMS"];
  TOARs = ["read","write"];
  Purpose = '';
  constructor(private service:ServiceService){
  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      cdsid:new FormControl(null,[Validators.required, Validators.maxLength(8)]),
      name:new FormControl(),
      applicationname:new FormControl(),
      accesstype:new FormControl(),
      supervisorcdsid:new FormControl(null,[Validators.required, Validators.maxLength(8)]),
      purpose:new FormControl(),
      createdby : new FormControl('Goutham'),
      date: new FormControl()
    })
  }
  onSubmit() {
    this.assesment = <Assesment>this.signupForm.value
    this.service.createAssesment(this.assesment);
  }
}
