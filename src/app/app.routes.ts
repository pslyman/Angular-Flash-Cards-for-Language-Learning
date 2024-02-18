import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SetOverviewComponent } from "./components/set-overview/set-overview.component";
import { SetsComponent } from "./components/sets/sets.component";
import { FlashCardsComponent } from "./components/flash-cards/flash-cards.component";

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "sets/:setId",
        component: SetsComponent,
        children: [
            {
                path: "overview",
                component: SetOverviewComponent
            },
            {
                path: "flash",
                component: FlashCardsComponent
            },
            {
                path: "",
                redirectTo: "overview",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];
