import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserActionServiceService } from '../user-action-service.service';


@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent {
  
  registerForm = new FormGroup({
    FirstName: new FormControl('', ),
    LastName: new FormControl('', ),
    Gender: new FormControl('M', ),
    email: new FormControl('',),
    mobile: new FormControl('', ),
    password: new FormControl('', ),
  });
  loginForm =new FormGroup({
    email: new FormControl('',),
    password: new FormControl('', ),
  })
  constructor(private formBuilder: FormBuilder,private userActionService:UserActionServiceService) { }
  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   // email: ['', [Validators.required, Validators.email]],
    //   email: ['', [Validators.required]],
    //   // password: ['', [Validators.required, Validators.minLength(6)]],
    //   password: ['', [Validators.required]],
    //   // password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required]
    // });
  
  }
  onRegisterSubmit() {
    console.log(this.registerForm.value);
    this.userActionService.saveUser(this.registerForm.value).subscribe(e=>{
      console.log(e);
     })
  
  }
  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.userActionService.loginUser(this.loginForm.value).subscribe(response => {
      console.log(response); // log the response to check its format
      try {
        const parsedResponse = JSON.stringify(response);
        console.log(parsedResponse);
      } catch (e) {
        console.error(e); // log any errors that occur when parsing the response
      }
    });
  }
  
}
