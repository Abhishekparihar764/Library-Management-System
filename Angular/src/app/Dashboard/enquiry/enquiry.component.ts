import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {


  posts: any;
  constructor(private common:CommonService){
    this.common.getfaqposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    })
  }
  
  
 
 


}


