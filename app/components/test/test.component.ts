import { Component, ViewChild, Inject, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "test",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.css"]
})

export class TestComponent implements OnInit, AfterViewInit {

    constructor( @Inject(Page) private _page: Page, public routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}
