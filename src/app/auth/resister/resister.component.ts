import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.scss']
})
export class ResisterComponent implements OnInit {

  errors: any = []

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  resister(resisterForm) {
    this.authService.resister(resisterForm.value).subscribe(
      (result) => {
        console.log('success')
        this.router.navigate(['/login'])
      },
      (err: HttpErrorResponse) => {
        this.errors = err.error.errors
      }
    )
  }

}
