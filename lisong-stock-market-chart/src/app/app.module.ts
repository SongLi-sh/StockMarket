import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { SubmitPasswordComponent } from './components/user/signup/submit-password/submit-password.component';
import { VerifyCodeComponent } from './components/user/signup/verify-code/verify-code.component';
import { UserLandingPageComponent } from './components/user/user-landing-page/user-landing-page.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { UserCompanyListComponent } from './components/user/user-company-list/user-company-list.component';
import { UserComparisonChartsComponent } from './components/user/user-comparison-charts/user-comparison-charts.component';
import { UserIpoListComponent } from './components/user/user-ipo-list/user-ipo-list.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserResetPasswordComponent } from './components/user/user-reset-password/user-reset-password.component';
import { AdminCompanyListComponent } from './components/admin/admin-company-list/admin-company-list.component';
import { AdminCompanyCreateComponent } from './components/admin/admin-company-create/admin-company-create.component';
import { AdminStockExchangeListComponent } from './components/admin/admin-stock-exchange-list/admin-stock-exchange-list.component';
import { AdminUploadSummaryComponent } from './components/admin/admin-upload-summary/admin-upload-summary.component';
import { AdminStockExchangeCreateComponent } from './components/admin/admin-stock-exchange-create/admin-stock-exchange-create.component';
import { AdminImportExcelComponent } from './components/admin/admin-import-excel/admin-import-excel.component';
import { AdminIpoListComponent } from './components/admin/admin-ipo-list/admin-ipo-list.component';
import { AdminIpoCreateComponent } from './components/admin/admin-ipo-create/admin-ipo-create.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    VerifyCodeComponent,
    SubmitPasswordComponent,
    UserLandingPageComponent,
    AdminLandingPageComponent,
    UserCompanyListComponent,
    UserComparisonChartsComponent,
    UserIpoListComponent,
    UserProfileComponent,
    UserResetPasswordComponent,
    AdminCompanyListComponent,
    AdminCompanyCreateComponent,
    AdminStockExchangeListComponent,
    AdminStockExchangeCreateComponent,
    AdminUploadSummaryComponent,
    AdminImportExcelComponent,
    AdminIpoListComponent,
    AdminIpoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
