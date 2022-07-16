import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postDataVar = {
    titletg: 'foo',
    bodydb: 'update',
    userIdd: 1,
    id: 101 
  }
  resData = {}
  updateData={}
  deleteData ={}
  serverError =''
  constructor(private apiService:AppService) { }

  ngOnInit(): void {
  }
  apiCall(){
    this.apiService.postData(this.postDataVar).subscribe((data)=>{
  this.resData = data
    },(error)=>{
      console.log(error)
      this.serverError = error
    })
  }

  updateApiCall(){
    this.apiService.updateData(this.postDataVar).subscribe((data)=>{
  this.updateData = data
  console.log(data)
    },(error)=>{
      console.log(error)
      this.serverError = error
    })
  }
  deleteApiCall(){
   this.apiService.deleteData().subscribe((data)=>{
    console.log(data)
    this.deleteData = data
   },(error)=>{
    console.log(error)
    this.serverError = error
  })
  }
 
}
