import { Component } from '@angular/core';
import { cardSets } from '../../constants/sets.constants';
import { Set } from '../../interfaces/sets.interface'
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fadeInAnimation, staggerAnimation } from '../../constants/animations.constants';

@Component({
  selector: 'app-set-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './set-overview.component.html',
  styleUrl: './set-overview.component.scss',
  animations: [staggerAnimation, fadeInAnimation],
})
export class SetOverviewComponent {
  constructor(private route: ActivatedRoute) { }

  viewFront = true;
  setId = '';
  set: Set = {
    id: 0,
    name: '',
    description: '',
    cards: []
  };

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get("setId") ?? "";
    const findSet = cardSets.find(set => set.id.toString() === this.setId);
    if (findSet) {
      this.set = findSet;
    }
  }

  flipPreviews(): void {
    this.viewFront = !this.viewFront;
  }
}
