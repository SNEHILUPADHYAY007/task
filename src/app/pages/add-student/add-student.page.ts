import { Component, OnInit } from '@angular/core';
import {ApiServiceService }from '../../services/api-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  firstName:string;  
  ageStu:number;
  rollNo:number;
  date:number;
  gender:boolean=false;
  email:string;
  submitted:boolean=false;
  

  constructor(private service:ApiServiceService, private routes:Router) { }

  ngOnInit() {
  }

  genderF(x:string){
    
    if(x==='Male'){
      this.gender=true;
    }
    else{
      this.gender=false;
    }
  }

  addDetails(){
    const data={
      rollNo: this.rollNo,
      name: this.firstName,
      email:this.email,
      age:this.ageStu ,
      date:this.date ,
      isMale:this.gender ,
    }

    //console.log(this.student);
    this.service.addstudentAPI(data).subscribe(res=>{
      console.log(res);
      this.routes.navigate(["/display-student/123"]);

    })

  }
 




}
