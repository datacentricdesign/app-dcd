import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicDocRouterModule } from './public-doc.routes';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HowToComponent } from './how-to/how-to.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReferencesComponent } from './references/references.component';
import { TermsComponent } from './terms/terms.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { MarkdownPipe } from 'app/markdown.pipe';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignOutPageComponent } from './sign-out-page/sign-out-page.component';
import { ConsentPageComponent } from './consent-page/consent-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    PublicDocRouterModule
  ],
  declarations: [
    LandingPageComponent,
    GetStartedComponent,
    HowToComponent,
    ExplanationsComponent,
    PrivacyComponent,
    ReferencesComponent,
    TermsComponent,
    TutorialsComponent,
    MarkdownPipe,
    SignInPageComponent,
    SignUpPageComponent,
    SignOutPageComponent,
    ConsentPageComponent,
  ],
  providers: [
    
  ],
})

export class PublicDocModule { }
