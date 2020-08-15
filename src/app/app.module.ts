import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module/app.material.module.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { StoreModule } from "@ngrx/store";
import { metaReducer } from "./common/index";
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example';

@NgModule({
	declarations: [
		AppComponent,
		DialogOverviewExample,
		DialogOverviewExampleDialog
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		StoreModule.forRoot({ reducer: metaReducer }),
		FormsModule
	],
	entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
	providers: [
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
