import { Component } from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  
  
  
 
//add angular
book_title!: any;
isbn!:any;
author!:any;
publisher!:any;
category!:any;
copies!:any;
description!:any;



//show angular
posts: any;
constructor(private common:CommonService){
this.common.getbookposts().subscribe(response => {
  this.posts = response;
  console.warn(this.posts);
})
}


getbookData(){
 
var inputData ={
  book_title:this.book_title,
  isbn:this.isbn,
  author:this.author,
  publisher:this.publisher,
  category:this.category,
  copies:this.copies,
  description:this.description
  



}


this.common.getbookData(inputData).subscribe({
next: (res: any) => {
  console.log(res);
},

error:(err: any) => {
  console.log(err,'errors');
}
});

}
  

//show angular


}
