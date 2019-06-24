import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularCLIApp';
  Icon='reorder';
  ChangeBtnIcon(val){
    if(this.Icon=='restore'){this.Icon='reorder'}
    else{this.Icon='restore'}
  }
 
}
