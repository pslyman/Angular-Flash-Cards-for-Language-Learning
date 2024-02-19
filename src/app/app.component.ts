import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";

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

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showButton = this.router.url === "/home"; // Show button only on home page
      }
    });
    this.toggleTheme(true);
  }

  toggleTheme(firstTime = false) {
    if (!firstTime) {
      this.lightTheme = !this.lightTheme;
    }

    const body = document.getElementsByTagName("body")[0];
    if (this.lightTheme) {
      localStorage.setItem("theme", "light");
      body.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      body.classList.remove("light");
    }
  }
}
