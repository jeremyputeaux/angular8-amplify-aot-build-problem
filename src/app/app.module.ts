import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AmplifyAngularModule,
  AmplifyService,
  AmplifyModules
} from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmplifyAngularModule],
  providers: [
    {
      provide: AmplifyService,
      useFactory: () => {
        return AmplifyModules({
          Auth,
          Storage
        });
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
