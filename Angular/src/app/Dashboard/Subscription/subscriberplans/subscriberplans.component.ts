import { Component } from '@angular/core';
  import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-subscriberplans',
  templateUrl: './subscriberplans.component.html',
  styleUrls: ['./subscriberplans.component.css']
})
export class SubscriberplansComponent {





  //add angular
  sub_id!: any;
  sub_name!:any;
  active_plan!:any;
  ending_date!:any;
  duration!:any;
  status!:any;
  
  //show angular
  posts: any;
  constructor(private common:CommonService){
  this.common.getsubsposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  })
  }
  
  
  getsubsData(){
   
  var inputData ={
   sub_id:this.sub_id,
   sub_name:this.sub_name,
    active_plan:this.active_plan,
      ending_date:this.ending_date,
      duration:this.duration,
        status:this.status,
  }
  
  
  this.common.getsubsData(inputData).subscribe({
  next: (res: any) => {
    console.log(res);
  },
  
  error:(err: any) => {
    console.log(err,'errors');
  }
  });
  
  }
  



}



  

