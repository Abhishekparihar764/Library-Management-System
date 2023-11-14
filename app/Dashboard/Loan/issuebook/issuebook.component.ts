import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent {


  
//add angular
Librarian_name!: any;
issue_date!:any;
Member_id!:any;
Book_name!:any;
return_date!:any;
fine_amount!:any;
Return!:any;



//show angular
posts: any;
constructor(private common:CommonService){
this.common.getissueposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


getissueData(){
 
var inputData ={
  Librarian_name:this.Librarian_name,
  issue_date:this.issue_date,
  Member_id:this.Member_id,
  Book_name:this.Book_name,
  return_date:this.return_date,
  fine_amount:this.fine_amount,
  Return:this.Return


}


this.common.getissueData(inputData).subscribe({
next: (res: any) => {
  console.log(res);
},

error:(err: any) => {
  console.log(err,'errors');
}
});

}
}
