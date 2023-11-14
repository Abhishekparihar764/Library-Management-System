import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})

export class ManagebookComponent implements OnInit {
  searchTerm: string = '';
  filteredPosts: any[] = [];


  id!: any;
  book_title!: any;
  isbn!: any;
  author!: any ;
  publisher!: any;
  category!: any;
  copies!:any;
  description!: any;

  posts: any;

  constructor(private common: CommonService) {}

  ngOnInit() {
    this.fetchBookPosts();
    this.filterPosts(); 
  }



  filterPosts() {
    if (!this.searchTerm) {
      this.filteredPosts = this.posts; // Display all posts if search term is empty
      return;
    }

    this.filteredPosts = this.posts.filter(post => {
      return (
        post.id.includes(this.searchTerm) ||
        post.book_title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.isbn.includes(this.searchTerm) ||
        post.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.publisher.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.copies.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  
  fetchBookPosts() {
    this.common.getbookposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    });
  }

  deleteBook(id: number) {
    this.common.deletebook(id).subscribe(response => {
      console.warn(response);
      this.fetchBookPosts();
    });
  }

  openEditModal(posts: any) {
    this.id = posts.id;
    this.book_title = posts.book_title;
    this.isbn = posts.isbn;
    this.author = posts.author;
    this.publisher = posts.publisher;
    this.category = posts.category;
    this.copies = posts.copies;
    this.description = posts.description;

    const modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeBook() {
    const modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  updateBookData(posts: NgForm) {
  
    const updatedData = {
      id: this.id,
      book_title: posts.value.book_title,
      isbn: posts.value.isbn,
      author: posts.value.author,
      publisher: posts.value.publisher,
      category: posts.value.category,
      copies: posts.value.copies,
      description: posts.value.description
    };

    this.common.updateBookData(this.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('id:', this.id);
        console.log('Updated Data:', updatedData);
        console.log('Update successful:', res);
        this.fetchBookPosts();
        this.closeBook();
      },
      error: (err: any) => {
        console.log('Update error:', err);
      }
    });
  }
}
