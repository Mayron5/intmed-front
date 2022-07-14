import { trigger, style, animate, transition } from '@angular/animations';

export const OpacityAnimation = [
  trigger('opacityAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in-out', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
  ]),
];
