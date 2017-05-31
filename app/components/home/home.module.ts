import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// Router
import { NativeScriptRouterModule } from "nativescript-angular/router";

// List-View
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([{ path: "", component: HomeComponent }]),
        NativeScriptUIListViewModule
    ],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }