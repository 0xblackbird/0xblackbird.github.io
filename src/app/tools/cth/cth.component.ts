import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/tools/cth/download/download.component';

@Component({
	selector: 'app-cth',
	templateUrl: './cth.component.html',
	styleUrls: ['./cth.component.scss']
})

@Injectable()

export class CthComponent implements OnInit {
	
	url = this.appComponent.url;
	name: string;
	description: string;
	disclaimer: string;
	hashTypes: string;
	githubRepositoryLink: string
	version: string;
	twitter: string;

	constructor(private http: HttpClient, private bottomSheet: MatBottomSheet, private appComponent: AppComponent) { }

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));
  			
  			this.name = jsonData.tools.tool0.name;
  			this.description = jsonData.tools.tool0.description;
			this.disclaimer = jsonData.tools.tool0.disclaimer;
  			this.hashTypes = jsonData.tools.tool0.info;
  			this.githubRepositoryLink = jsonData.tools.tool0.githubRepositoryLink;
  			this.version = jsonData.tools.tool0.version;
  			this.twitter = jsonData.about.twitter;
  		});
  	};

	openBottomSheet(): void {
		this.bottomSheet.open(DownloadComponent);
	};
}