import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserPollComponent {
  value = 65;
  hide = false;
}
