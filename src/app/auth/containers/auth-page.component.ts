import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../models/user';
import * as fromAuth from '../reducers';
import * as AuthActions from '../actions/auth.actions';

@Component({
  selector: 'app-auth-page',
  template: `
    <div class="auth-root" fxFlex="100" fxFill>
      <div class="auth-root_content" fxLayout="row" fxFill>
        <div class="auth-form" fxFlex="40" fxFlex.lt-md="100">
          <div class="auth-logo">
            <img src="assets/unibank.jpg">
          </div>
          <app-login-form
            (submitted)="onSubmit($event)"
            [pending]="pending$ | async"
            [errorMessage]="error$ | async">
            ></app-login-form>
          <div class="auth-demo">
            <!--<button mat-button color="primary" routerLink="/bank/">Show demo</button>-->
          </div>
          <div class="auth-info">
            <h5 class="mat-h4">Warning</h5>
            <p class="mat-caption">
              UniBank does not require installation of any additional software.
              <br>
              Be advised to protect from malware pretending Trusteer Rapport
            </p>
          </div>
        </div>
        <div class="auth-hero" fxFlex="60" fxHide.sm="true" fxHide.xs="true">

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./auth-page.styles.scss']
})
export class AuthPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }
  onSubmit($event: Authenticate) {
    this.store.dispatch(new AuthActions.Login($event));
  }
}
