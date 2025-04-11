
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-issuedbook',
  templateUrl: './issuedbook.component.html',
  styleUrls: ['./issuedbook.component.css']
})
export class IssuedbookComponent implements OnInit {


  id!: any;
  Librarian_name!: any;
  issue_date!: any;
  Member_id!: any ;
  Book_name!: any;
  return_date!: any;
  fine_amount!: any;
  Return!:any;

  posts: any;

  constructor(private common: CommonService) {}

  ngOnInit() {
    this.fetchissuePosts();
  }

  fetchissuePosts() {
    this.common.getissueposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    });
  }

  deleteissue(id: number) {
    this.common.deleteissue(id).subscribe(response => {
      console.warn(response);
      this.fetchissuePosts();
    });
  }

  openEditModal(posts: any) {
    this.id = posts.id;
    this.Librarian_name = posts.Librarian_name;
    this.issue_date = posts.issue_date;
    this.Member_id= posts.Member_id;
    this.Book_name = posts.Book_name;
    this.return_date = posts.return_date;
    this.fine_amount = posts.fine_amount;
    this.Return = posts.Return;

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
  updateissueData(posts: NgForm) {
  
    const updatedData = {
      id: this.id,
      Librarian_name: posts.value.Librarian_name,
      issue_date: posts.value.issue_date,
      Member_id: posts.value.Member_id,
      Book_name: posts.value.Book_name,
      return_date: posts.value.return_date,
      fine_amount: posts.value.fine_amount,
      Return: posts.value.Return
    };

    this.common.updateissueData(this.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('id:', this.id);
        console.log('Updated Data:', updatedData);
        console.log('Update successful:', res);
        this.fetchissuePosts();
        this.closeModal();
      },
      error: (err: any) => {
        console.log('Update error:', err);
      }
    });
  }
}


