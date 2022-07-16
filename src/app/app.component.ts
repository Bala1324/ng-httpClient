import { Component } from '@angular/core';
import {AppService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-service';
  testData = {}
  test = ''
  
  constructor(private apiService:AppService){
  this.apiService.getData().subscribe((data)=>{
  this.testData = data
  })
 }
}
