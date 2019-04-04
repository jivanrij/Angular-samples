import { Component, OnInit } from '@angular/core';
import { AjaxService } from './ajax.service';


@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.sass']
})
export class AjaxComponent implements OnInit {

  constructor(private ajaxService: AjaxService) { }

  ngOnInit() {
  }

  // Observable, handles and returns the values of a get call
  get(event: Event) {
    this.ajaxService.getCall('http://jsonplaceholder.typicode.com/todos/1').subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Observable, does a get call that fails
  getFail(event: Event) {
    this.ajaxService.getCall('http://jsonplaceholder.typicode.com/fail/1').subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Observable, does a post call
  post(event: Event) {
    this.ajaxService.postCall('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Observable, does a post call that fails
  postFail(event: Event) {
    this.ajaxService.postCall('https://jsonplaceholder.typicode.com/fail').subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
