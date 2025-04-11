import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {


  //add angular
enq_name!: any;
enq_email!:any;
message!:any;
date!:any;

//show angular
posts: any;
constructor(private common:CommonService){
this.common.getfaqposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


getfaqData(){
 
var inputData ={
 enq_name:this.enq_name,
 enq_email:this.enq_email,
  message:this.message,
  date:this.date
  
}


this.common.getfaqData(inputData).subscribe({
next: (res: any) => {
  console.log(res);
},

error:(err: any) => {
  console.log(err,'errors');
}
});

}

}




