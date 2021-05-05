import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8081/helloWorldBean');
    // console.log("Execute hello world bean");
  }

  executeHelloWorldServicePathVariable(name: any){
    return this.http.get<HelloWorldBean>(`http://localhost:8081/helloWorld/pathVariable/${name}`);
    // console.log("Execute hello world bean");
  }
}

