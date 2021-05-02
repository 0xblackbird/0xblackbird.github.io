import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ParticlesModule } from 'ngx-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HallOfFameComponent } from './about/hall-of-fame/hall-of-fame.component';
import { ToolsComponent } from './tools/tools.component';
import { CthComponent } from './tools/cth/cth.component';
import { EnumComponent } from './tools/enum/enum.component';
import { DownloadComponent } from './tools/cth/download/download.component';
import { DownloadEnumComponent } from './tools/enum/download-enum/download-enum.component';
import { Post0Component } from './blog/post0/post0.component';
import { Post1Component } from './blog/post1/post1.component';
import { Post2Component } from './blog/post2/post2.component';
import { FromNowPipe } from './from-now.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		BlogComponent,
		AboutComponent,
	    ToolsComponent,
	    CthComponent,
	    EnumComponent,
	    DownloadComponent,
	    DownloadEnumComponent,
	    Post0Component,
	    Post1Component,
	    Post2Component,
	    HallOfFameComponent,
	    FromNowPipe
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		ParticlesModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		MatButtonModule,
		MatIconModule,
		MatProgressBarModule,
		MatBottomSheetModule,
		MatListModule,
		MatAutocompleteModule,
		MatInputModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatMenuModule
	],
	providers: [
		AppComponent,
		HomeComponent,
		BlogComponent,
		AboutComponent,
	    ToolsComponent,
	    CthComponent,
	    EnumComponent,
	    DownloadComponent,
	    DownloadEnumComponent,
	    Post0Component,
	    Post1Component,
	    Post2Component,
	    HallOfFameComponent
	],
	entryComponents: [DownloadComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
