import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-bookrental',
  templateUrl: './bookrental.component.html',
  styleUrls: ['./bookrental.component.css']
})
export class BookrentalComponent {
  formSubmitted: boolean = false;
  formError: boolean = false;

//add angular
full_Name!: any;
email!:any;
Date!:any;
id_proof!:any;
phone!:any;
Address!:any;
Book_name!:any;
Author!:any;
prefer_Newspaper!:any;
year_of_Newspaper!:any;




//show angular
posts: any;
constructor(private common:CommonService){
this.common.getmemdetailposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


onSubmit(formData: NgForm) {
  if (formData.valid && !this.formSubmitted) {
      var inputData = {
 
  full_Name:this.full_Name,
  email:this.email,
  Date:this.Date,
  id_proof:this.id_proof,
  phone:this.phone,
  Address:this.Address,
  Book_name:this.Book_name,
  Author:this.Author,
  prefer_Newspaper:this.prefer_Newspaper,
  year_of_Newspaper:this.year_of_Newspaper
  
};
this.common.getmemdetailData(inputData).subscribe({
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

