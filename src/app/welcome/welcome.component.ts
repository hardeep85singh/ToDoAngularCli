import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome to ToDo project'
  welcomeMessageFromService:string = ''
  errorMessage:string = ''
  name = ''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response: any){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.errorMessage = error.error.message;
  }

}
