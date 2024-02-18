import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SetOverviewComponent } from "./components/set-overview/set-overview.component";
import { SetsComponent } from "./components/sets/sets.component";
import { FlashCardsComponent } from "./components/flash-cards/flash-cards.component";

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "sets",
        component: SetsComponent,
        children: [
            {
                path: "overview/:setId",
                component: SetOverviewComponent
            },
            {
                path: "review/:setId",
                component: FlashCardsComponent
            },
            {
                path: "**",
                redirectTo: "/home",
                pathMatch: "full"
            },
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
