import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  formSubmitted: boolean = false;
  formError: boolean = false;
//add angular
full_name!: any;
email!: any;
id_proof!:any;
phone!:any;
Address!:any;
prefer_visit!:any;
Exam_prepare_for!:any;
details!:any;



//show angular
posts: any;
constructor(private common:CommonService){
this.common.getseatposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}



onSubmit(formData: NgForm) {
  if (formData.valid && !this.formSubmitted) {
      var inputData = {
 
 

  full_name:this.full_name,
  email:this.email,
  id_proof:this.id_proof,
  phone:this.phone,
  Address:this.Address,
  prefer_visit:this.prefer_visit,
  Exam_prepare_for:this.Exam_prepare_for,
   details:this.details


 
  };
  this.common.getseatData(inputData).subscribe({
    next: (res: any) => {
        console.log(res);
        this.formSubmitted = true;
        this.formError = false;
    },
    error: (err: any) => {
        console.log(err, 'errors');
        this.formSubmitted = true;
        this.formError = true;
    }
  });
  
  }
  }
  
  
  }
  






 




