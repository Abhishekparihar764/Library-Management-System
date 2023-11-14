import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
 //add angular
  id!:any;
  author_name!: any;
  book_written!:any;
  
posts: any;
constructor(private common:CommonService){
  this.common.getauthorposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  })
}

  getauthorData(){
   
  var inputData ={
    author_name: this.author_name,
    book_written:this.book_written
  }


this.common.getauthorData(inputData).subscribe({
  next: (res: any) => {
    console.log(res);
  },

  error:(err: any) => {
    console.log(err,'errors');
  }
});

}








ngOnInit() {
  this.fetchAuthorPosts();
}

fetchAuthorPosts() {
  this.common.getauthorposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  });
}

deleteauthor(id: number) {
  this.common.deleteauthor(id).subscribe(response => {
    console.warn(response);
    this.fetchAuthorPosts();
  });
}

openEditModal(posts: any) {
  this.id = posts.id;
  this.author_name = posts.author_name;
  this.book_written = posts.book_written;

  const modelDiv = document.getElementById('editModal');
  if (modelDiv != null) {
    modelDiv.style.display = 'block';
  }
}

closeModal() {
  const modelDiv = document.getElementById('editModal');
  if (modelDiv != null) {
    modelDiv.style.display = 'none';
  }
}
updateAuthorData(posts: NgForm) {

  const updatedData = {
    id: this.id,
    author_name: posts.value.author_name,
    book_written: posts.value.book_written
   
  };

  this.common.updateAuthorData(this.id, updatedData).subscribe({
    next: (res: any) => {
      console.log('id:', this.id);
      console.log('Updated Data:', updatedData);
      console.log('Update successful:', res);
      this.fetchAuthorPosts();
      this.closeModal();
    },
    error: (err: any) => {
      console.log('Update error:', err);
    }
  });
}
}




