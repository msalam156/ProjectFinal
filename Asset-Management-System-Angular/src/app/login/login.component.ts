import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Declaring Variable
  isSubmitted : boolean = false;
  error : string = "";
  loginForm : FormGroup;  

  constructor(private formBuilder:FormBuilder, private authService: AuthService, private userService:UserService) { }

  // Life Cycle Hook
  ngOnInit(): void
  {
    // Create a Reactive Form  --  Model
    // FormGroup  --  FormControlName -- FormBuilder
    this.loginForm = this.formBuilder.group(
      {
        // FormControlName
        username : ['',[Validators.required]],
        password : ['',[Validators.required]],
        userTypeID : ['',[Validators.required]]
      }
    )
  }

  //Check Credentials
  loginCredentials()
  {
    this.isSubmitted = true;
    console.log(this.loginForm.value);

    //  Invalid Form
    if(this.loginForm.invalid)
    {
      return;
    }

    // Valid Form
    if(this.loginForm.valid)
    {
      // Calling Method To Check Credentials
      this.authService.UsernameAndPassword(this.loginForm.value).subscribe(
          (result)=>{
            if(result === null)
            {
              this.error = "Invalid Username or Password";
            }
            else
            {
              this.error = "";

              // Insert UserID in LocalStorage
              localStorage.setItem("UserID",result.userID + "");
              console.log(result);
            }
          },
          (error)=>{
            this.error = "Invalid Username or Password";
          }
      );
    }

  }

  // Get all Controls from loginForm
  get formControls()
  {
    return this.loginForm.controls;
  }
}
