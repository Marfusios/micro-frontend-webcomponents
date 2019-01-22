import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserPollComponent {
  value = 65;
  hide = false;
}
