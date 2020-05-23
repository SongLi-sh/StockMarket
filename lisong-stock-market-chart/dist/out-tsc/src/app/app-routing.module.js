import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { VerifyCodeComponent } from './components/user/signup/verify-code/verify-code.component';
import { SubmitPasswordComponent } from './components/user/signup/submit-password/submit-password.component';
import { UserLandingPageComponent } from './components/user/user-landing-page/user-landing-page.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserResetPasswordComponent } from './components/user/user-reset-password/user-reset-password.component';
const routes = [
    {
        path: 'user/signin',
        component: SigninComponent
    },
    {
        path: 'user/signup',
        component: SignupComponent
    },
    {
        path: 'user/signup/verifycode',
        component: VerifyCodeComponent
    },
    {
        path: 'user/signup/submitpassword',
        component: SubmitPasswordComponent
    },
    {
        path: 'user/land',
        component: UserLandingPageComponent
    },
    {
        path: 'admin/land',
        component: AdminLandingPageComponent
    },
    {
        path: 'user/profile',
        component: UserProfileComponent
    },
    {
        path: 'user/reset/password',
        component: UserResetPasswordComponent
    },
    {
        path: '**',
        redirectTo: 'user/signin'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map