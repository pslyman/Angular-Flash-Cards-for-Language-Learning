import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { cardSets } from '../../constants/sets.constants';

@Component({
  selector: "app-sets",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./sets.component.html",
  styleUrl: "./sets.component.scss",
})
export class SetsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  setId = "";
  setName = "";

  ngOnInit(): void {
    const getSetId = this.route.firstChild?.snapshot.paramMap.get("setId");

    if (getSetId) {
      this.setId = getSetId;

      const getSetName = cardSets.find(set => set.id.toString() === this.setId);

      if (getSetName) {
        this.setName = getSetName.name;
      }
    }
  }
}
