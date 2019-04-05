import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  // Recources to use:
  // https://jsonplaceholder.typicode.com/
  // Use the Allow-Control-Allow-Origin Chrome plugin
  // Read this: https://stackoverflow.com/questions/49011276/angular-httpclient-doesnt-send-post-it-sends-options

  constructor(private httpClient: HttpClient) { }

  getCall(uri: string) {
 
    // you won't aways be needing to set the headers
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.httpClient.get(uri,
      {
        headers: httpHeaders
      }
    );
  }

  postCall(uri: string) {

    // you won't aways be needing to set the headers
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache'
    });
    return this.httpClient.post(uri,
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      },
      {
        headers: httpHeaders,
        observe: 'body',
        responseType: 'json'
      }
    );
  }
}