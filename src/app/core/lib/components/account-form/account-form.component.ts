import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vex-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
      fadeInUp400ms
    ]
})
export class AccountFormComponent implements OnInit {

  @Input() title: string = 'Login';
  @Input() subtitle: string = '';
  @Input() submitLabel: string = 'Entrar';
  @Input() showPassword: boolean = true;
  @Input() showEmail: boolean = true;
  @Input() showForgotPassword: boolean = false;

  @Output() formSubmit = new EventEmitter<{ email: string; password: string }>();
  @Output() forgotPasswordClick = new EventEmitter<void>();

  form!: FormGroup;

  inputType = 'password';
  visible = false;
  loading = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar) {
    // this.form = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: this.showEmail
        ? ['', [Validators.required, Validators.email]]
        : [null],
      password: this.showPassword
        ? ['', Validators.required]
        : [null]
    });
  }

  send() {
    if (this.form.valid) {
      this.loading = true;
      this.cd.markForCheck();
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
      this.cd.markForCheck();
    }
  }

  toggleVisibility() {
    // if (this.visible) {
    //   this.inputType = 'password';
    //   this.visible = false;
    //   this.cd.markForCheck();
    // } else {
    //   this.inputType = 'text';
    //   this.visible = true;
    //   this.cd.markForCheck();
    // }
    this.visible = !this.visible;
    this.inputType = this.visible ? 'text' : 'password';
    this.cd.markForCheck();
  }


  onForgotPassword(){
    this.forgotPasswordClick.emit();
  }

}
