import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent  implements OnInit {

  id!:any;
  publisher_name!: any;
  book_published!:any;
  

  

//show angular
posts: any;
constructor(private common:CommonService){
  this.common.getpublisherposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  })
}



getpublisherData(){
   
  var inputData ={
    publisher_name: this.publisher_name,
    book_published:this.book_published,
  }


this.common.getpublisherData(inputData).subscribe({
  next: (res: any) => {
    console.log(res);
  },

  error:(err: any) => {
    console.log(err,'errors');
  }
});


}







ngOnInit() {
  this.fetchpublisherPosts();
}

fetchpublisherPosts() {
  this.common.getpublisherposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  });
}

deletepublisher(id: number) {
  this.common.deletepublisher(id).subscribe(response => {
    console.warn(response);
    this.fetchpublisherPosts();
  });
}

openEditModal(posts: any) {
  this.id = posts.id;
  this.publisher_name = posts.publisher_name;
  this.book_published = posts.book_published;

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
updatepublisherData(posts: NgForm) {

  const updatedData = {
    id: this.id,
    publisher_name: posts.value.publisher_name,
    book_published: posts.value.book_published
   
  };

  this.common.updatepublisherData(this.id, updatedData).subscribe({
    next: (res: any) => {
      console.log('id:', this.id);
      console.log('Updated Data:', updatedData);
      console.log('Update successful:', res);
      this.fetchpublisherPosts();
      this.closeModal();
    },
    error: (err: any) => {
      console.log('Update error:', err);
    }
  });
}

}
