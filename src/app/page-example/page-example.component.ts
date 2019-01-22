import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PageExampleComponent {
  page = 1;
  hidePoll = false;
  hidePagination = false;
}
