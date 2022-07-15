import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postDataVar = {
    title: 'foo',
    body: 'update',
    userId: 1,
    id: 101 
  }
  resData = {}
  updateData={}
  deleteData ={}
  constructor(private apiService:AppService) { }

  ngOnInit(): void {
  }
  apiCall(){
    this.apiService.postData(this.postDataVar).subscribe((data)=>{
  this.resData = data
    })
  }

  updateApiCall(){
    this.apiService.updateData(this.postDataVar).subscribe((data)=>{
  this.updateData = data
  console.log(data)
    })
  }
  deleteApiCall(){
   this.apiService.deleteData().subscribe((data)=>{
    console.log(data)
    this.deleteData = data
   })
  }

}
