import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {
  email!: string;
  senha!: string;
  message!: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(email: string, senha: string){
    this.authService.login(email,senha)
    .pipe(catchError((error: HttpErrorResponse) => {
      if(error.status == 401)
        this.message = "Email ou senha inválida!"
        return throwError (() => error)
      }))
      .subscribe(() => {
        this.router.navigate(['/pets'])
      })
  }
}
