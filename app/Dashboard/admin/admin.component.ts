import { Component, OnInit} from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit {

//subscriber Details
 

posts: any;
posts3: any;
constructor(private common:CommonService ){
  this.common.getmemdetailposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  })

  


   
    this.common.getseatposts().subscribe(response => {
      this.posts3 = response;
      console.warn(this.posts3);
    })
  }

  




  ngOnInit() {
    this.fetchmemdetailPosts();
    this.fetchseatPosts();
  }


// memberDetails


id!:any;
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



fetchmemdetailPosts() {
  this.common.getmemdetailposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  });
}

deletememdetail(id: number) {
  this.common.deletememdetail(id).subscribe(response => {
    console.warn(response);
    this.fetchmemdetailPosts();
  });
}

openmem(posts: any) {
  this.id = posts.id;
  this.full_Name = posts.full_Name;
  this.email=posts.email;
  this.Date=posts.Date;
  this.id_proof= posts.id_proof;
  this.phone=posts.phone;
 this.Address=posts.Address;
  this.Book_name=posts.Book_name;
  this.Author=posts.Author;
  this.prefer_Newspaper=posts.prefer_Newspaper;
  this.year_of_Newspaper=posts.year_of_Newspaper;

  
  const modelDiv = document.getElementById('editModal');
  if (modelDiv != null) {
    modelDiv.style.display = 'block';
  }
}

closemem() {
  const modelDiv = document.getElementById('editModal');
  if (modelDiv != null) {
    modelDiv.style.display = 'none';
  }
}
 updatememdetailData(postsForm: NgForm) {
    const updatedData = {
      id: this.id,
      full_Name: this.full_Name,
      email: this.email,
      Date: this.Date,
      id_proof: this.id_proof,
      phone: this.phone,
      Address: this.Address,
      Book_name: this.Book_name,
      Author:this.Author,
      prefer_Newspaper:this.prefer_Newspaper,
      year_of_Newspaper:this.year_of_Newspaper
    };

    this.common.updatememdetailData(this.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('Updated Data:', updatedData);
        console.log('Update successful:', res);
        this.fetchmemdetailPosts();
        this.closemem();
      },
      error: (err: any) => {
        console.log('Update error:', err);
      }
    });
  }


//show angular



//subscriber




  //add angular 

  
  full_name!: any;
  
  prefer_visit!:any;
  Exam_prepare_for!:any;
  details!:any;
   
  
  
  
 
  
  
  
  fetchseatPosts() {
    this.common.getseatposts().subscribe(response => {
      this.posts3 = response;
      console.warn(this.posts3);
    });
  }
  
  deleteseat(id: number) {
    this.common.deleteseat(id).subscribe(response => {
      console.warn(response);
      this.fetchseatPosts();
    });
  }
  
  opensubs(posts3: any) {
    this.id = posts3.id;
    this.full_name = posts3.full_name;
    this.email = posts3.email;
    this.id_proof=posts3.id_proof;
    this.phone=posts3.phone;
    this.Address=posts3.Address;
    this.prefer_visit = posts3.prefer_visit;
    this.Exam_prepare_for =posts3.Exam_prepare_for;
    this.details = posts3.details;


    
    const modelDiv = document.getElementById('editModal1');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  
  closesubs() {
    const modelDiv = document.getElementById('editModal1');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  updateseatData(posts3: NgForm) {
  
    const updatedData = {
      id: this.id,
     full_name : posts3.value.full_name,
    email: posts3.value.email,
     id_proof: posts3.value.id_proof,
     phone: posts3.value.phone,
    Address: posts3.value.Address,
     prefer_visit:posts3.value.prefer_visit,
     Exam_prepare_for:posts3.value.Exam_prepare_for,
     details:posts3.value.details
     
    };
  
    this.common.updateseatData(this.id, updatedData).subscribe({
      next: (res: any) => {
        console.log('id:', this.id);
        console.log('Updated Data:', updatedData);
        console.log('Update successful:', res);
        this.fetchseatPosts();
        this.closesubs();
      },
      error: (err: any) => {
        console.log('Update error:', err);
      }
    });
  }
  




  

}
