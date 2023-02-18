import { Component, HostBinding, OnInit } from '@angular/core';
import { animate, group, query, state, style, transition, trigger, stagger } from '@angular/animations';
const COLORS = {
  darkColor: '#272527',
  redColor: '#e73e33',
  whiteColor: '#FFFFFF',
}
const fontSize = '10vw';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('header', [
      transition(':enter', [
        style({
        position: 'fixed',
        color: COLORS.darkColor,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: fontSize,
        lineHeight: fontSize,
        }),
        query('span.circle', [
          style({
            color: COLORS.redColor,
            left: '-20%',
            top: `calc(${fontSize} / 10)`,
            width: fontSize,
            height: fontSize,
          }),
          animate('2s ease-in-out', style({left: '100%',transform: 'translateX(0%)'})),
        ]),
        group([
          animate('1s', style({
            color: COLORS.whiteColor,
          })),
          query('span.circle', [
            animate('1s', style({ color: COLORS.whiteColor})),
          ]),
        ]),
        group([
          animate('0.5s', style({
            top: '*',
            left: '*',
            transform: '*',
            fontSize: '*',
            lineHeight: '*',
          })),
          query('span.circle', [
            animate('0.5s', style({
              width: '*',
              height: '*',
            }))
          ])
        ])

      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  @HostBinding('@header') gethostTrigger() {
    return '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
