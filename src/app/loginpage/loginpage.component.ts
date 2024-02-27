import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  loginform: FormGroup;
  data: any = {}
  username = ""
  password = ""
  constructor(private fb: FormBuilder,
    private router: Router) {

    this.loginform = this.fb.group({
      username: [""],

      password: [""],
    })

  }
  ngOnInit(): void {

  }

  onSubmit() {

    // console.logthis.loginform.value
    this.data = this.loginform.value
    if (this.data.username == 'oglacs@4321' && this.data.password == 'angular') {
      this.router.navigate(['products'])
    }
    else if (this.data.username !== 'oglacs@4321' ) {
      alert('your username is incorrect')
    }
    else if (this.data.password !== 'angular')
    {
      alert('your password is incorrect')
    }




  }

}



