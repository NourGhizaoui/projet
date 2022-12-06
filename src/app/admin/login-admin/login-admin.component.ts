import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  message:string="";
  role='autre';
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      username:['', Validators.required],
      password:['', Validators.required]
      
    })
  }

  onSubmit()
  {
   
this.auth.login(this.loginForm.value['username'],this.loginForm.value['password']).subscribe(
  users=>  { if(users.length==0)
  {
    alert("mot de passe incorrect ");
    this.loginForm.reset();
  }
  else
  this.router.navigate(['admin/dash']);
  });
  }

  
}
