import { Component, OnInit } from '@angular/core';
import { DetailService} from '../detail.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  cours:any;
 

  constructor(private detailservice:DetailService) { }

  ngOnInit():void{
    this.cours=this.detailservice.stdData;
    

  }

}
