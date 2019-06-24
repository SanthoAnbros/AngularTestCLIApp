import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-compo',
  templateUrl: './material-compo.component.html',
  styleUrls: ['./material-compo.component.css']
})
export class MaterialCompoComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  // varFormG: FormGroup;

  varFormG = this.fb.group({
    fname : ['', Validators.required]
  })
  
  varNewFormGroup = this.fb.group({
    lname : ['', Validators.required]
  })

  IsVisible = true;

  ngOnInit() {
   
    
  }



  OnClickFn(){
    alert('Clicked');
  }
  
  loadData(){
    this.IsVisible= true;
    setTimeout(()=>{
      this.IsVisible= false;
    }, 5000)
  }

}
