import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  state,
} from "@angular/animations";

export const staggerAnimation = trigger("stagger", [
  transition("* => *", [
    // this hides everything right away
    query(":enter", style({ opacity: 0 }), { optional: true }),

    // starts to animate things with a stagger in between
    query(":enter", stagger(20, [animate(150, style({ opacity: 1 }))]), {
      delay: 0,
      optional: true,
    }),
  ]),
]);

export const fadeInAnimation = trigger("fadeIn", [
  state("void", style({ opacity: 0 })),
  transition(":enter", [animate(300, style({ opacity: 1 }))]),
]);

export const slideFadeInAnimation = trigger("slideFadeIn", [
  state("void", style({ opacity: 0, transform: "translateY(50px)" })),
  transition(":enter", [
    animate(
      "500ms ease-out",
      style({ opacity: 1, transform: "translateY(0)" })
    ),
  ]),
]);

export const subtleFadeInAnimation = trigger("subtleSlideFadeIn", [
  state("void", style({ opacity: 0, transform: "translateY(5px)" })),
  transition(":enter", [
    animate(
      "300ms ease-out",
      style({ opacity: .5, transform: "translateY(0)" })
    ),
  ]),
]);