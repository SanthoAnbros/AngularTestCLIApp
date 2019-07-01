import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../Services/http.service';
import { FormControl } from '@angular/forms';
import { Photo } from '../Classes/comps';
import { timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scrollable-page',
  templateUrl: './scrollable-page.component.html',
  styleUrls: ['./scrollable-page.component.css']
})
export class ScrollablePageComponent implements OnInit {

  TimeNow;
  DueTime;
  constructor(private HttpService : HTTPService, private activatedRoute:ActivatedRoute, private router : Router) { 
    setInterval(()=>{
      this.TimeNow = (new Date()).toLocaleTimeString();
      this.DueTime = timer(10);
    },1000)
   }

  page:number=1;
  PhotosArray:Photo[]=[];
  
  searchKey;

  ngOnInit() {

    // alert('Routing To Main');
    // this.router.navigate(['/'],{queryParams:{'Redirected From ScrollPage':true}})
    
    this.activatedRoute.queryParamMap
    .subscribe(params=>{
      this.searchKey = params.get('searchQuery');
    });
    if(this.searchKey==''){
      this.GetPhotos(this.page);
    }
    else{
      this.SearchById();
    }
    
  }

  GetPhotos(page){
    this.HttpService.GetPhotos(this.page).subscribe(
      (result: Photo[])=>{
        //debugger;
        result.forEach(element => {
          this.PhotosArray.push(element);
        });
      }
    )
  }
  inp;
  
  SearchById(){
    if(this.searchKey){
      this.HttpService.SearchById(this.searchKey).subscribe(
        (datas:Photo)=>{
            this.PhotosArray = [datas];
        }
      )
    }
    else{
      this.PhotosArray.pop();
      this.GetPhotos(1);
    }
  }

  onScroll(){
    this.page = this.page + 1;
    this.GetPhotos(this.page);
  }



}
