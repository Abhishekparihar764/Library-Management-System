import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'http://127.0.0.1:8000/api';


  constructor( private http: HttpClient) { }

  //book

  getbookData(inputData: object){
    return this.http.post('http://127.0.0.1:8000/api/create/book',inputData);
  }


getbookposts() {
  return this.http.get('http://127.0.0.1:8000/api/get/book');
}

deletebook(id: number) {
  console.log("value of id:", id);
   return this.http.delete("http://127.0.0.1:8000/api/"+'delete/book/'+id);
 
}


updateBookData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/book/${id}`;
  return this.http.put(url, updatedData);
}








  //for add author
  getauthorData(inputData: object){
    return this.http.post('http://127.0.0.1:8000/api/create/author',inputData);
  }


getauthorposts() {
  return this.http.get('http://127.0.0.1:8000/api/get/author');
}

deleteauthor(id: number) {
  console.log("value of id:", id);
   return this.http.delete("http://127.0.0.1:8000/api/"+'delete/author/'+id);
}


updateAuthorData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/author/${id}`;
  return this.http.put(url, updatedData);
}








//publisher 
getpublisherData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/publisher',inputData);
}


getpublisherposts() {
return this.http.get('http://127.0.0.1:8000/api/get/publisher');
}

deletepublisher(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/publisher/'+id);
}

updatepublisherData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/publisher/${id}`;
  return this.http.put(url, updatedData);
}







//issueBook
getissueData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/issue_book',inputData);
}


getissueposts() {
return this.http.get('http://127.0.0.1:8000/api/get/issue_book');
}

deleteissue(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/issue_book/'+id);
}

updateissueData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/issue_book/${id}`;
  return this.http.put(url, updatedData);
}









//subscriber_plans

getsubsData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/subscription_plan',inputData);
}


getsubsposts() {
return this.http.get('http://127.0.0.1:8000/api/get/subscription_plan');
}

deletesubs(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/subscription_plan/'+id);
}

updatesubsData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/subscription_plan/${id}`;
  return this.http.put(url, updatedData);
}







//join_details
getseatData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/subscriber_detail',inputData);
}


getseatposts() {
return this.http.get('http://127.0.0.1:8000/api/get/subscriber_detail');
}

deleteseat(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/subscriber_detail/'+id);
}

updateseatData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/subscriber_detail/${id}`;
  return this.http.put(url, updatedData);
}





//member

getmemData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/member',inputData);
}


getmemposts() {
return this.http.get('http://127.0.0.1:8000/api/get/member');
}

deletemem(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/member/'+id);
}



updatememData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/member/${id}`;
  return this.http.put(url, updatedData);
}




//memberDetails

getmemdetailData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/member_detail',inputData);
}


getmemdetailposts() {
return this.http.get('http://127.0.0.1:8000/api/get/member_detail');
}

deletememdetail(id: number) {
console.log("value of id:", id);
 return this.http.delete("http://127.0.0.1:8000/api/"+'delete/member_detail/'+id);
}
updatememdetailData(id: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/member_detail/${id}`;
  return this.http.put(url, updatedData);
}




//admin
getadminData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/admin',inputData);
}


getadminposts() {
return this.http.get('http://127.0.0.1:8000/api/get/admin');
}








//enquiries

getfaqData(inputData: object){
  return this.http.post('http://127.0.0.1:8000/api/create/enquiry',inputData);
}


getfaqposts() {
return this.http.get('http://127.0.0.1:8000/api/get/enquiry');
}




}