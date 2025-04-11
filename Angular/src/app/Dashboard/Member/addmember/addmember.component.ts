import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent {

 
//add angular
member_id!: any;
full_name!:any;
email!:any;
phone!:any;
date!:any;
id_proof!:any;
Address!:any;
status!:any;



//show angular
posts: any;
constructor(private common:CommonService){
this.common.getmemposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


getmemData(){
 
var inputData ={
  member_id:this.member_id,
  full_name:this.full_name,
  email:this.email,
  phone:this.phone,
  date:this.date,
  id_proof:this.id_proof,
  Address:this.Address,
  status:this.status 
  



}


this.common.getmemData(inputData).subscribe({
next: (res: any) => {
  console.log(res);
},

error:(err: any) => {
  console.log(err,'errors');
}
});

}




}



