import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../Service2/test-service.service';


@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {

  constructor(private testservice : TestServiceService) { }

  inpText :string='Hello';
  
  varArray;

  Show : boolean = true;

  ngOnInit() {
    this.testservice.GetItem()
    .subscribe(data=>{
      console.log(data);
      this.varArray = data;
    })
  }

}
