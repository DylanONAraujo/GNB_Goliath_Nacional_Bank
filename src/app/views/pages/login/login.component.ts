import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
    private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

    onFormSubmit(data: { email: string; password: string }) {
    // Mock: qualquer credencial loga
    if (data.email && data.password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.snackbar.open('Credenciais inválidas', 'Fechar', { duration: 1500 });
    }
  }
 
  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}
