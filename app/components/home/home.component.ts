import { Component, ViewChild, Inject, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit, AfterViewInit {

    constructor( @Inject(Page) private _page: Page, public routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}
