import { Component, OnInit} from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-managemember',
  templateUrl: './managemember.component.html',
  styleUrls: ['./managemember.component.css']
})
export class ManagememberComponent implements OnInit {

  
//add angular


id!:any;
member_id!: any;
full_name!:any;
email!:any;
phone!:any;
date!:any;
id_proof!:any;
Address!:any;
status!:any;



  posts: any;
  constructor(private common:CommonService){
    this.common.getmemposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    })
  }
  
  
  ngOnInit() {
    this.fetchmemPosts();
  }
  
  fetchmemPosts() {
    this.common.getmemposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    });
  }
  
  deletemem(id: number) {
    this.common.deletemem(id).subscribe(response => {
      console.warn(response);
      this.fetchmemPosts();
    });
  }
  
  openEditModal(posts: any) {
    this.id = posts.id;
    this.member_id = posts.member_id;
    this.full_name = posts.full_name;
    this.email= posts.email;
    this.phone = posts.phone;
    this.id_proof= posts.id_proof;
    this.date = posts.date;
    this.Address = posts.Address;
   this.status=posts.status;
  
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
  updatememData(postsForm: NgForm) {
  
    const updatedData = {
      id: this.id,
      member_id:this.member_id,
      full_name: this.full_name,
      email : this.email,
      phone : this.phone,
    
      id_proof : this.id_proof,
      date : this.date,
      Address : this.Address,
      status :this.status
    };
  
    this.common.updatememData(this.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('id:', this.id);
        console.log('Updated Data:', updatedData);
        console.log('Update successful:', res);
        this.fetchmemPosts();
        this.closeModal();
      },
      error: (err: any) => {
        console.log('Update error:', err);
      }
    });
  }
  


}
