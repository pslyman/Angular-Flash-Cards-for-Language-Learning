import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { Set as CardSet } from "./interfaces/sets.interface";
import { cardSets, namesOfGroupIds } from "./constants/sets.constants";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  router = inject(Router);

  title = "Angular-Flash-Cards-for-Language-Learning";
  showButton = true;
  lightTheme = localStorage.getItem("theme") === "light";
  cardSets = cardSets;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showButton = this.router.url === "/home"; // Show button only on home page
      }
    });
    this.toggleTheme(true);

    this.sort();

    // Create group review sets based on groupId

    const allGroupIds = new Set<number>();

    this.cardSets.forEach((set) => {
      allGroupIds.add(set.groupId);
    });

    let maxId = this.cardSets.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });

    for (let collectiveGroupId of allGroupIds) {
      const cardsByGroupId = this.cardSets.filter(
        (set) => set.groupId === collectiveGroupId
      );

      const tempCardSetObject: CardSet = {
        id: maxId.id++,
        groupId: collectiveGroupId,
        name: `${namesOfGroupIds[collectiveGroupId]}: Review`,
        description: `Review entire grouping for ${namesOfGroupIds[collectiveGroupId]}`,
        cards: [],
      };

      cardsByGroupId.forEach((set) => {
        set.cards.forEach((card) => {
          if (card) {
            tempCardSetObject.cards.push(card);
          }
        });
      });

      this.cardSets.push(tempCardSetObject);
    }

    this.sort();
    this.sortByGroup();

  }

  sort(): void {
    this.cardSets = cardSets.sort(function (a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
  }
  
  sortByGroup(): void {
    this.cardSets = cardSets.sort(function (a, b) {
      return a.groupId - b.groupId || a.name.localeCompare(b.name);
    });
  }

  toggleTheme(firstTime = false) {
    if (!firstTime) {
      this.lightTheme = !this.lightTheme;
    }

    const html = document.getElementsByTagName("html")[0];
    const body = document.getElementsByTagName("body")[0];
    if (this.lightTheme) {
      localStorage.setItem("theme", "light");
      body.classList.add("light");
      html.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      body.classList.remove("light");
      html.classList.remove("light");
    }
  }
}
