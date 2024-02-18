import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-sets",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./sets.component.html",
  styleUrl: "./sets.component.scss",
})
export class SetsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  setId = "";
  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get("setId") ?? "";
    
    console.log(this.setId);
  }
}
