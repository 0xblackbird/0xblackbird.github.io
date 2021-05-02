import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import * as moment from 'moment';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DownloadEnumComponent } from 'src/app/tools/enum/download-enum/download-enum.component';

@Component({
	selector: 'app-enum',
	templateUrl: './enum.component.html',
	styleUrls: ['./enum.component.scss']
})
export class EnumComponent implements OnInit {

	url = this.appComponent.url;
	name: string = "";
	description: string = "";
	toolsUtilized: string;
	lastUpdate: string;
	githubRepositoryLink: string = "";
  	twitter: string;

	constructor(private http: HttpClient, private bottomSheet: MatBottomSheet, private appComponent: AppComponent) { }

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));
  			
  			this.name = jsonData.tools.tool1.name;
  			this.description = jsonData.tools.tool1.description;
  			this.toolsUtilized = jsonData.tools.tool1.info;
  			this.githubRepositoryLink = jsonData.tools.tool1.githubRepositoryLink;
  			this.lastUpdate = jsonData.tools.tool1.lastUpdated;
  			this.twitter = jsonData.about.twitter;
  		});
  	};

	openBottomSheet(): void {
		this.bottomSheet.open(DownloadEnumComponent);
	}

}
