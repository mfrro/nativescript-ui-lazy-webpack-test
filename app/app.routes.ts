import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule" },
    { path: "test", loadChildren: "./components/test/test.module#TestModule" }
];