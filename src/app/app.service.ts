import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  handleError(error:any){
   return throwError(error || 'Server Error')
  }

  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  postData(data:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.cm/pos',data).pipe(catchError(this.handleError));
  }

  updateData(data:any):Observable<any>{
    return this.http.put('https://jsonplaceholderypicode.com/posts/5',data).pipe(catchError(this.handleError));
  }

  deleteData():Observable<any>{
    return this.http.delete('https://jsonplaceder.typicode.com/posts/1').pipe(catchError(this.handleError));
  }

}
