import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators'

@Component({
  selector: 'app-new-form2',
  templateUrl: './new-form2.component.html',
  styleUrls: ['./new-form2.component.css']
})
export class NewForm2Component implements OnInit {

  constructor() { }
  inp;
  
  myOps=[111,11,1111,432,3543,576575,43226,7123,83424];
  formControl = new FormControl();
  myOpsF : Observable<number[]>;

  ngOnInit(){
    this.autoCompleteFilterFunct();
  }

  autoCompleteFilterFunct(){
    this.myOpsF = this.formControl.valueChanges
    .pipe(
      startWith(''),
      map((value):number[]=>{
        return this.myOps.filter(ops=>ops.toString().includes(value))
      })
    )
  }

}
