import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.page.html',
  styleUrls: ['./match-making.page.scss'],
})
export class MatchMakingPage implements OnInit {

  check:boolean=false;
  name1:string;
  name2:string;
  percentage:number;
  statusBoolean:boolean=false;
  
  @ViewChild('localRef1',{static:true}) localRef1:ElementRef;
  @ViewChild('localRef2',{static:true}) localRef2:ElementRef;
  
  
  constructor() { }

  ngOnInit() {
  }

  
  onCheck(){
    this.check=true;
    this.name1=this.localRef1.nativeElement.value;
    this.name2=this.localRef2.nativeElement.value;
    let count=0,i:number;
    let min:number;
    let max:number;
    let dist:number;
    
    if(this.name2.length<this.name1.length){
      min=this.name2.length;
      max=this.name1.length;
      dist=this.name1.length-this.name2.length;
    }
    else{
      min=this.name1.length;
      max=this.name2.length;
      dist=this.name2.length-this.name1.length;
    }
    for(i=0;i<max;i++){
      if(this.name1.charAt(i)===this.name2.charAt(i)){
        continue;
      }
      else{
        count++;
      }
    }
    
    if(count>=0){
      //console.log(max,count,dist,min);
      let x:number;
      this.statusBoolean=true;
      this.percentage=Math.round(((max-count)/this.name1.length)*100);
      //console.log(this.percentage)
      
    }
    else{
      this.statusBoolean=false;
    }
  }

  onReset(){
    window.location.reload();
  }

}
