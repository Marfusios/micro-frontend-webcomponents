import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageExampleComponent {
  page = 1;
  hidePoll = false;
  hidePagination = false;
}
