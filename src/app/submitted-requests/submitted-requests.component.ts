import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Assesment } from '../assesment';

@Component({
  selector: 'app-submitted-requests',
  templateUrl: './submitted-requests.component.html',
  styleUrls: ['./submitted-requests.component.css']
})
export class SubmittedRequestsComponent implements OnInit{
  assesments!: Assesment[];
constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.service.getAssesments().subscribe(response=>(
      this.assesments = response
      ))
  }
}
