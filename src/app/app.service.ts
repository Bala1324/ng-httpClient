import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  postData(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
  }

  updateData(data:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/5',data);
  }

  deleteData(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

}
