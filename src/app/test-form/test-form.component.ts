import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { XlservicesService } from '../Services/xlservices.service';
import { ServicesService } from '../services.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(  private fb : FormBuilder, private xlsx:XlservicesService, private _apiservices:ServicesService) { 
    
  }

  varFormG : FormGroup;

  // addHobbies(){
  //   (<FormArray>this.varFormG.get('hobbies')).push(new FormControl('data'))
  // }

  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];

  ngOnInit() {
    this.varFormG  = this.fb.group({
      fname : ['',[Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(10), Validators.pattern]],
      lname : ['', Validators.required],
      hobbies: this.fb.array([this.addHobbies()])
    });
    }

    addHobbies(){
      return this.fb.group({
        Hobb1:[''],
        Hobb2:['']
      })
    }
    addSubHobbie(){
      return this.fb.group({
        SubHobb1:[],
        SubHobb2:[]
      })
    }

    LogArray(){
      console.log(this.varFormG.value);
    }
    addHobbiesForm(){
      return (<FormArray>this.varFormG.get('hobbies')).push(this.addHobbies())
    }
    removeHobbiesForm(index){
      return (<FormArray>this.varFormG.get('hobbies')).removeAt(index);
    }

    get GFormArray(){
      return <FormArray>this.varFormG.get('hobbies');
    }

  OnSubmitFun(){

    console.log(this.varFormG.value);
  }

  ExportToExcel(){

    if (this.varFormG.invalid) {
      alert('Please fill all the mandatory fields.')
      return;      
    }

    this._apiservices.getAPIValue()
    .subscribe(dataA=>{
      this.xlsx.exportAsExcelFile(dataA, 'SampleExcelA');
       alert('Exported to ExcelA')
    })
  }

}
