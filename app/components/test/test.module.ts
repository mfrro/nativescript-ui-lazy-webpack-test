import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// Router
import { NativeScriptRouterModule } from "nativescript-angular/router";

// List-View
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";

import { TestComponent } from "./test.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([{ path: "", component: TestComponent }]),
        NativeScriptUIListViewModule
    ],
    declarations: [TestComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TestModule { }