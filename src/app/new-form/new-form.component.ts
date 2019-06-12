import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {FormsModule, FormControl, FormGroup, Validators} from '@angular/forms'
import { ServicesService } from '../services.service';
import { Comps, ItemsToBePost } from '../Classes/comps';
import { stringify } from 'querystring';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';



@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form : FormData;
  
  dataTable : any;

  newformG  = new FormGroup({
    empId : new FormControl('', Validators.required),
    empName : new FormControl('', Validators.maxLength(5)),
    empGrade : new FormControl ('')
  });

  EmpId: string ="";
  EmpName : string = "";
  Grade : string= "";

  compstemp : Comps[];

  Message : string = "Ng - New Form";
  IsTrue : boolean = true;

  constructor(private _ServicesService : ServicesService, private chDed : ChangeDetectorRef) { }

  ngOnInit() {
    this._ServicesService.getAPIValue().subscribe(
      data=>{
        this.compstemp =  data;
        console.log(this.compstemp);

        this.chDed.detectChanges();

        const table: any = $('table');
        this.dataTable = table.DataTable();
      }
    );
  }

  CallUpdateMethod(){
    debugger;
    var pitem = new ItemsToBePost();
    pitem.body = this.Grade;
    pitem.title = this.EmpName;
    pitem.userId = parseInt(this.EmpId);
    this._ServicesService.InsertValue(pitem).subscribe(data=>{
      console.log(data);
      alert('Value Inserted to the server! Values are => ' + stringify(data)  )
    })
  }

LogEntry(){
  console.log(this.EmpId,this.EmpName);
}
  
  onClickEvent(e){
    console.log(e);
  }

  EditComp(com : Comps){
      console.log(com);
      this.Grade = com.body;
      this.EmpName =com.email ;
      this.EmpId = com.id.toString() ;
  }

}
