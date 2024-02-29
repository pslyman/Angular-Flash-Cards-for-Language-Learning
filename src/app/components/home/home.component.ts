import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { cardSets } from "../../constants/sets.constants";
import {
  fadeInAnimation,
  staggerAnimation,
} from "../../constants/animations.constants";
import { Set } from "../../interfaces/sets.interface";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  animations: [staggerAnimation, fadeInAnimation],
})
export class HomeComponent implements OnInit {
  cardSets = cardSets.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });

  ngOnInit(): void {
    const reviewAllObject: Set = {
      id: 1000,
      name: "Review All",
      description: "Review every set all at once",
      cards: [],
    };

    this.cardSets.forEach((set) => {
      set.cards.forEach((card) => {
        if (card) {
          reviewAllObject.cards.push(card);
        }
      });
    });

    this.cardSets.push(reviewAllObject);
  }
}
