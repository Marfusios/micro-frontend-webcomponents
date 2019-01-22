import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserPollComponent } from './user-poll/user-poll.component';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserPollComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: environment.production ? [] : [AppComponent],
  entryComponents: [
    UserPollComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.defineCustomElement('user-poll', UserPollComponent);
  }

  defineCustomElement(selectorName: string, component: any) {
    // This library provides an Angular Elements Strategy Factory which always runs in the NgZone,
    // allowing automatic change detection
    const strategyFactory = new ElementZoneStrategyFactory(component, this.injector);

    const el = createCustomElement(component, {injector: this.injector, strategyFactory});
    customElements.define(selectorName, el);
  }

  ngDoBootstrap() {}
}
