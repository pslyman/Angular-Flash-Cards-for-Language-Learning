import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from '@angular/router';
import { cardSets } from "../../constants/sets.constants";
import { fadeInAnimation, staggerAnimation } from "../../constants/animations.constants";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
    animations: [staggerAnimation, fadeInAnimation],
})
export class HomeComponent {
    cardSets = cardSets.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name);
    });
}
