import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

//add angular
admin_name!: any;
admin_email!:any;
admin_phone!:any;
admin_education!:any;
admin_address!:any;
remark!:any;



//show angular
posts: any;
constructor(private common:CommonService){
this.common.getadminposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


getadminData(){
 
var inputData ={
  admin_name:this.admin_name,
  admin_email:this.admin_email,
  admin_phone:this.admin_phone,
  admin_education:this.admin_education,
  admin_address:this.admin_address,
  remark:this.remark



}


this.common.getadminData(inputData).subscribe({
next: (res: any) => {
  console.log(res);
},

error:(err: any) => {
  console.log(err,'errors');
}
});

}



}
