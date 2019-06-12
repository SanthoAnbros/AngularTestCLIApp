import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl } from '@angular/forms';
import { XlservicesService } from '../Services/xlservices.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(  private fb : FormBuilder, private xlsx:XlservicesService, private _apiservices:ServicesService) { 
    
  }

  varFormG : FormGroup;

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
      lname : ['', Validators.required]
    });
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
