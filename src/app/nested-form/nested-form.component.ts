import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { debug } from 'util';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  nformGroup:FormGroup;

  jsonString = {"fname":null,"lname":"lname","email":"email","phoneNums":[{"PhoneNumDes":"a","phoneNum":[{"addPhoneNum":"b"},{"addPhoneNum":"c"},{"addPhoneNum":"d"},{"addPhoneNum":"ee"},{"addPhoneNum":"f"}]},{"PhoneNumDes":"A","phoneNum":[{"addPhoneNum":"B"},{"addPhoneNum":"C"},{"addPhoneNum":"DD"},{"addPhoneNum":"E"},{"addPhoneNum":"F"}]}]}

  ngOnInit() {
    this.nformGroup = this._fb.group({
      fname     :['', [Validators.required]],
      lname     :['', Validators.required],
      email     :['', [ Validators.required, Validators.email]],
      phoneNums :this._fb.array([this.addPhone()])
    });
    
  }

  // addPhone(){
  //   return this._fb.group({
  //     PhoneNumDes:[],
  //     phoneNum : this._fb.array([this.addAddPhone()])
  //   });
  // }

  addPhone(){
    return this._fb.group({
      PhoneNumDes:['', Validators.required],
      phoneNum : this._fb.array([this.addAddPhone()])
    });
    
  }

  addAddPhone(){
    return this._fb.group({
      addPhoneNum:['', Validators.required]
    })
  }

  get GetPhoneArray(){
    //return <FormArray>(this.nformGroup['controls'].phoneNums['controls']);
    return <FormArray>this.nformGroup.controls['phoneNums'];
  }

  

  addPhoneNumControl(){
    this.GetPhoneArray.push(this.addPhone());
  }

  addAddPhoneNumControl(fg){
    (<FormArray>(<FormArray>this.nformGroup.controls['phoneNums']).at(fg).get('phoneNum')).push(this.addAddPhone())
    //.push(this.addAddPhone())fg
  }

  removePhoneNumControl(index){
    this.GetPhoneArray.removeAt(index);
  }

  submit(){
    console.log( this.nformGroup.value )
    console.log(JSON.stringify(this.nformGroup.value ))
    //alert( stringify(this.nformGroup.value))
  }

  BindValues(){
    console.log(this.jsonString);
    // this.nformGroup.patchValue({
    //   fname:'test',
    //   lname:'test',
    //   email:'test'
    // });
    // this.jsonString.phoneNums.forEach(
    //   (PhNum,i)=> {
    //     this.GetPhoneArray.push(this._fb.group(PhNum))
    //     //this.GetPhoneArray.patchValue(PhNum)
    //     PhNum.phoneNum.forEach((PNum,j)=>{
    //       (<FormArray>(<FormArray>this.nformGroup.controls['phoneNums']).at(i).get('phoneNum')).push(this._fb.group(PNum));
    //     })
    //   }
    //   );

      this.nformGroup =  this._fb.group({
        fname: [this.jsonString.fname],
        lname: [this.jsonString.lname],
        email: [this.jsonString.email],
        phoneNums: this._fb.array(this.jsonString.phoneNums.map(PhoneNumsS => this.generatePhoneNums(PhoneNumsS)))
      });
      //debugger;
      console.log(this.nformGroup.errors);
  }

  generatePhoneNums(PhoneNumsS) {
    return this._fb.group({
      PhoneNumDes: [PhoneNumsS.PhoneNumDes],
      phoneNum: this._fb.array(PhoneNumsS.phoneNum.map(PhoneNums => this.generateaddPhoneNum(PhoneNums)))
    });
  }

  generateaddPhoneNum(PhoneNums){
    return this._fb.group({
      addPhoneNum :[PhoneNums.addPhoneNum]
    })
  }

  formError={
    fname:'',
    lname:'',
    email:'',
    PhoneNums : this.pnArray()
  }

  pnArray(){
    return [{
      PhoneNumDes:'',
      phoneNum: this.addpnArray()
    }]
  } 

  addpnArray(){
    [{
    addPhoneNum:''
    }]
  }

  validateForm(){
    for(let control in this.nformGroup.controls){
      debugger;
      let fg = <FormGroup>this.nformGroup;
      console.log((<FormGroup>this.nformGroup).get(control).invalid&&(<FormGroup>this.nformGroup).get(control).dirty);
    }
  }

  // // form validation
  // validateForm() {
  //   // console.log('validateForm');
  //   // for (let field in this.formErrors) {
  //   //   this.formErrors[field] = '';
  //   //   let input = this.register_readers.get(field);
  //   //   if (input.invalid && input.dirty) {
  //   //     for (let error in input.errors) {
  //   //       this.formErrors[field] = this.validationMessages[field][error];
  //   //     }
  //   //   }
  //   // }
  //   this.validateXs();
  // }
  // validateXs() {
  //   let XsA = <FormArray>this.validateForm['controls'].Xs;
  //   console.log('validateXs');
  //   // console.log(XsA.value);
  //   this.formErrors.Xs = [];
  //   let x = 1;
  //   while (x <= XsA.length) {
  //     this.formErrors.Xs.push({
  //       X: '',
  //       Ys: [{
  //         Y1: '',
  //         Y2: '',
  //         Zs: [{
  //           Z: ''
  //         }]
  //       }]
  //     });
  //     let X = <FormGroup>XsA.at(x - 1);
  //     console.log('X--->');
  //     console.log(X.value);
  //     for (let field in X.controls) {
  //       let input = X.get(field);
  //       console.log('field--->');
  //       console.log(field);
  //       if (input.invalid && input.dirty) {
  //         for (let error in input.errors) {
  //           this.formErrors.Xs[x - 1][field] = this.validationMessages.Xs[field][error];
  //         }
  //       }
  //     }
  //     this.validateYs(x);
  //     x++;
  //   }

  // }

  // validateYs(x) {
  //   console.log('validateYs');
  //   let YsA = (<FormArray>this.form.controls['Xs']).at(x - 1).get('Ys') as FormArray;
  //   this.formErrors.Xs[x - 1].Ys = [];
  //   let y = 1;
  //   while (y <= YsA.length) {
  //     this.formErrors.Xs[x - 1].Ys.push({
  //       Y1: '',
  //       Y2: '',
  //       Zs: [{
  //         Z: ''
  //       }]
  //     });
  //     let Y = <FormGroup>YsA.at(y - 1);
  //     for (let field in Y.controls) {
  //       let input = Y.get(field);
  //       if (input.invalid && input.dirty) {
  //         for (let error in input.errors) {
  //           this.formErrors.Xs[x - 1].Ys[y - 1][field] = this.validationMessages.Xs.Ys[field][error];

  //         }

  //       }
  //     }

  //     this.validateZs(x, y);
  //     y++;
  //   }
  // }

  // validateZs(x, y) {
  //   console.log('validateZs--');
  //   let ZsA = ((<FormArray>this.form.controls['Xs']).at(x - 1).get('Ys') as FormArray).at(y - 1).get('Zs') as FormArray;
  //   this.formErrors.Xs[x - 1].Ys[y - 1].Zs = [];
  //   let z = 1;
  //   while (z <= ZsA.length) {
  //     this.formErrors.Xs[x - 1].Ys[y - 1].Zs.push({
  //       Z: ''
  //     });
  //     let Z = <FormGroup>ZsA.at(z - 1);
  //     for (let field in Z.controls) {
  //       let input = Z.get(field);
  //       console.log('input--->');
  //       console.log(input);
  //       if (input.invalid && input.dirty) {
  //         for (let error in input.errors) {
  //           this.formErrors.Xs[x - 1].Ys[y - 1].Zs[z - 1][field] = this.validationMessages.Xs.Ys.Zs[field][error];

  //         }

  //       }
  //     }

  //     // this.validateSamnumbers(x, y);
  //     z++;
  //   }
  // }
  // }

}
