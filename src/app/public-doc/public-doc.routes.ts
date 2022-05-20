import { Routes, RouterModule } from '@angular/router';

import { GetStartedComponent } from './get-started/get-started.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ReferencesComponent } from './references/references.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { HowToComponent } from './how-to/how-to.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PublicDocComponent } from './public-doc.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignOutPageComponent } from './sign-out-page/sign-out-page.component';
import { ConsentPageComponent } from './consent-page/consent-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const PublicDocRoutes: Routes = [
  {
    path: '',
    component: PublicDocComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'get-started',
        component: GetStartedComponent
      },
      {
        path: 'references',
        component: ReferencesComponent
      },
      {
        path: 'tutorials',
        component: TutorialsComponent
      },
      {
        path: 'how-to',
        component: HowToComponent
      },
      {
        path: 'explanations',
        component: ExplanationsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      }
    ]
  },
  { path: 'signin', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'signout', component: SignOutPageComponent },
  { path: 'consent', component: ConsentPageComponent },
  { path: 'error', component: ErrorPageComponent }
];

export let PublicDocRouterModule = RouterModule.forChild(
    PublicDocRoutes
);
