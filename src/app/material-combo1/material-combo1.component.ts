import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-combo1',
  templateUrl: './material-combo1.component.html',
  styleUrls: ['./material-combo1.component.css']
})
export class MaterialCombo1Component implements OnInit {

  matOpenState = false;
  myObjs:string[]=[];
  myIn ;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    console.log(this.myObjs);
  }

  AddVal(ev){
    console.log(this.myIn)
    this.myObjs.push(this.myIn);
    console.log(this.myObjs)
  }

  FG = this.fb.group({
    chkBox : [false],
    radBtn : [false],
    drpDown : [false],
    subdrpDown : [false]
  })
  A = ['s','s','s'];
  B = ['b','b','b'];
  C = ['c','c','rc'];
  selValz=[];
  valChange(val){
    
    switch(this.FG.value.drpDown){
      case 'A':{this.selValz= this.A; break}
      case 'B':{this.selValz= this.B; break}
      case 'C':{this.selValz= this.C; break}
    }
  }

  myObj = {
    "name":"John",
    "age":30,
    "cars": {
      "car1":"Ford",
      "car2":"BMW",
      "car3":"Fiat"
    }
   }
  

}
