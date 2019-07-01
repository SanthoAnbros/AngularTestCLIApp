import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from '../Services/http.service';

export class item{
  id : number;
  title : string;
  thumbnailUrl:string;
}

@Component({
  selector: 'app-scroll-page-details',
  templateUrl: './scroll-page-details.component.html',
  styleUrls: ['./scroll-page-details.component.css']
})



export class ScrollPageDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private http:HTTPService) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(param =>{
      console.log(param);
      console.log(param.get('id'));
      this.bindData(parseInt(param.get('id')));
    });
    this.activatedRoute.queryParamMap
    .subscribe(query=>{
      console.log(query);
    });
  }
  
  id;
  item = new item();
  

  bindData(paramId:number){
    debugger;
    this.http.SearchById(paramId)
    .subscribe((val)=>{
      console.log(val);
      this.item.id = val['id'];
      this.item.title = val['title']
      this.item.thumbnailUrl=val['thumbnailUrl'];
    })
  }

}
