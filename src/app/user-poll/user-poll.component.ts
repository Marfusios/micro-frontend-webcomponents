import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class UserPollComponent implements OnInit {
  value = 65;
  hide = false;
  constructor() { }

  ngOnInit() {
  }

}
