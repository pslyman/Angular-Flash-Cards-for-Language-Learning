import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Card, Set } from "../../interfaces/sets.interface";
import { cardSets } from "../../constants/sets.constants";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-flash-cards",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./flash-cards.component.html",
  styleUrl: "./flash-cards.component.scss",
})
export class FlashCardsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  setId = "";
  set: Set = {
    id: 0,
    name: "",
    description: "",
    cards: [],
  };
  cards: Card[] = [];
  currentCardIterator = 0;
  hideCard = true;
  reverseCards = false;
  hasStarted = false;

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get("setId") ?? "";
    const findSet = cardSets.find((set) => set.id.toString() === this.setId);
    if (findSet) {
      this.set = findSet;
    }
  }

  newCard(modifier: number) {
    if (this.currentCardIterator + modifier < 0) {
      this.currentCardIterator = 0;
    } else if (
      this.currentCardIterator + modifier >
      this.set.cards.length - 1
    ) {
      this.currentCardIterator = this.set.cards.length - 1;
    } else {
      this.currentCardIterator += modifier;
    }

    this.hideCard = true;
  }
}
