import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ToastrModule } from 'ngx-toastr'

import { SidebarModule } from './shared/sidebar/sidebar.module'
import { FooterModule } from './shared/footer/footer.module'
import { NavbarModule } from './shared/navbar/navbar.module'
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module'

import { AppComponent } from './app.component'
import { AppRoutes } from './app.routes'

import { AppDCDComponent } from './dcd/app-dcd.component'

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';
import { PublicDocComponent } from './public-doc/public-doc.component';
import { MarkdownPipe } from './markdown.pipe'

export function init_app(appService: AppService) {
  return () => appService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false,
      initialNavigation: "enabled"
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
    // MarkdownPipe,
    SharedModule.forRoot(),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://dwd.tudelft.nl'],
        sendAccessToken: true
      }
    })
  ],
  declarations: [
    AppComponent,
    AppDCDComponent,
    PublicDocComponent,
    // MarkdownPipe
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [AppService],
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
