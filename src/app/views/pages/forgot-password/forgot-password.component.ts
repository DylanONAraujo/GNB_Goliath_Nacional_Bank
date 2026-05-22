import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  onFormSubmit(data: { email: string }): void {
    this.snackbar.open(
      `E-mail de recuperação enviado para ${data.email}`,
      'OK',
      { duration: 4000 }
    );
    setTimeout(() => this.router.navigate(['/login']), 4000);
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
