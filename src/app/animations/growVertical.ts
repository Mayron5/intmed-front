import { trigger, style, animate, transition } from '@angular/animations';

export const GrowVertical = [
  trigger('growVertical', [
    transition(':enter', [
      style({ height: 0, overflow: 'hidden' }),
      animate('300ms ease-in-out', style({ height: '*', overflow: 'visible' })),
    ]),
    transition(':leave', [
      style({overflow: 'hidden'}),
      animate('300ms ease-in', style({ height: 0})),
    ]),
  ]),
];
