import { Component , OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {AfService} from '../providers/af.service';
@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  employeeList : AngularFireList<any>;
  studentDetailsList:any[];
  constructor(public AfService:AfService,firebase: AngularFireDatabase) { 
    this.employeeList = firebase.list('/studentList');
    this.employeeList.snapshotChanges().subscribe(item =>{
      
      item.forEach(ele =>{
        var data = ele.payload.val();
        console.log(data);
      });
    });
  }
  addEmployee(){
    this.employeeList.push({message:'hello'});
  }
  ngOnInit() {
  }
}
