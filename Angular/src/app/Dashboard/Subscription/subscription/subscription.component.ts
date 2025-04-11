import { Component, OnInit} from '@angular/core';
import{ CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent  implements OnInit {

  
//add angular
id!:any;
sub_id!: any;
  sub_name!:any;
  active_plan!:any;
  ending_date!:any;
  duration!:any;
  status!:any;
  


  posts: any;
  constructor(private common:CommonService){
    this.common.getsubsposts().subscribe(response => {
      this.posts = response;
      console.warn(this.posts);
    })
  }
  

ngOnInit() {
  this.fetchsubsPosts();
}

fetchsubsPosts() {
  this.common.getsubsposts().subscribe(response => {
    this.posts = response;
    console.warn(this.posts);
  });
}

deletesubs(id: number) {
  this.common.deletesubs(id).subscribe(response => {
    console.warn(response);
    this.fetchsubsPosts();
  });
}

openEditModal(posts: any) {
  this.id = posts.id;
  this.sub_id = posts.sub_id;
  this.sub_name  = posts.sub_name;
  this.active_plan= posts.active_plan;
  this.ending_date = posts.ending_date;
  this.duration = posts.duration;
  this.status= posts.status;
  
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
updatesubsData(posts: NgForm) {

  const updatedData = {
    id: this.id,
    sub_id: posts.value.sub_id,
    sub_name : posts.value.sub_name,
    active_plan : posts.value.active_plan,
    ending_date : posts.value.ending_date,
    duration : posts.value.duration,
    status : posts.value.status,
 
  };

  this.common.updatesubsData(this.id, updatedData).subscribe({
    next: (res: any) => {
      console.log('id:', this.id);
      console.log('Updated Data:', updatedData);
      console.log('Update successful:', res);
      this.fetchsubsPosts();
      this.closeModal();
    },
    error: (err: any) => {
      console.log('Update error:', err);
    }
  });
}


}
