import { animate, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('headerContainer', [
      state('start', style({height: '5vw'})),
      transition('init => start', [
        animate('0.5s ease-in-out')
    ]),
    ])
  ]

})
export class AppComponent implements OnInit {
  title = 'website';
  headerContainerState = 'init';

  ngOnInit() {
    setTimeout(() => {
      this.headerContainerState = 'start'
    }, 3000);
  }
}
