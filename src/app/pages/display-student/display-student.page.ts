import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../services/api-service.service';
declare var $: any;

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.page.html',
  styleUrls: ['./display-student.page.scss'],
})
export class DisplayStudentPage implements OnInit {
  apiData=[];
  studentData=[];
  check1:boolean=false;
  checker:boolean=false;


  
  update_name:any;
   update_rollNo:any;
   update_email:any
   update_age:any;
   update_date:any;
   update_isMale:boolean;
   student_id:any;
   newGender:boolean=false;
  constructor(private x:ApiServiceService,private service:ApiServiceService) { }

  ngOnInit() {
    this.x.getComments().subscribe(data=>{
      this.apiData=data
      console.log(this.apiData);
    })
  }

  delete(id){
    this.service.deleteAPI(id).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    })
  }


  genderF(x:string){
    if(x==='Male'){
      this.newGender=true;
      console.log(this.newGender);
    }
    else{
      this.newGender=false;
    }
  }

  check(name,rollNo,email,age,date,isMale,id){
    //(<any>$("#edit-modal")).modal("show");
    this.checker=true;
    this.update_name=name;
    this.update_rollNo=rollNo;
    this.update_email=email;
    this.update_age=age;
    this.update_date=date;
    this.update_isMale=isMale;
    this.student_id =id
    console.log(this.update_isMale);
  }

  addDetails(){
    const data={
      rollNo: this.update_rollNo,
      name: this.update_name,
      email:this.update_email,
      age:this.update_age ,
      date:this.update_date ,
      isMale:this.newGender ,
    }
    //console.log(this.student);
  
      this.service.addstudentAPI1(data,this.student_id).subscribe(res=>{
        //console.log(res);
        //(<any>$("#edit-modal")).modal("hide");
        this.ngOnInit()
  
         alert("Data Successfully Updated!")
      })
    }


}
