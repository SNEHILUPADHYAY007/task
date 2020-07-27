import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-maker',
  templateUrl: './budget-maker.page.html',
  styleUrls: ['./budget-maker.page.scss'],
})
export class BudgetMakerPage implements OnInit {

  income:number;
  expense:number;
  total:number=0;
  constructor() { }

  ngOnInit() {
  }

  onBudget(){
    console.log(this.income,this.expense);
    if(this.income>this.expense){
      this.total=(this.income)-(this.expense);
      console.log(this.total);
    }
    else{
      alert("your expense is much greater then income");
    }
    
  }

}
