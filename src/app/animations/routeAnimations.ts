import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        right: 0,
        opacity: 0,
      })
    ], { optional: true }),
    query(':enter', [
      animate('800ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ], { optional: true })
  ])
]);
