import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserPollComponent } from './user-poll/user-poll.component';
import { PageExampleComponent } from './page-example/page-example.component';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { environment } from 'src/environments/environment';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserPollComponent,
    PageExampleComponent,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: environment.production ? [] : [AppComponent],
  entryComponents: [
    UserPollComponent,
    PageExampleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.defineCustomElement('user-poll', UserPollComponent);
    this.defineCustomElement('webcomponent-page', PageExampleComponent);
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
