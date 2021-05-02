import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  	selector: 'app-download',
	templateUrl: './download.component.html',
	styleUrls: ['./download.component.scss']
})

export class DownloadComponent implements OnInit {

	url = this.appComponent.url;
	name: string;
	githubRepositoryLink: string;
	version: string;

	constructor(private http: HttpClient, private _bottomSheetRef: MatBottomSheetRef<DownloadComponent>, private appComponent: AppComponent) { }

  	ngOnInit(): void {
  		this.fetchData(this.url);
  	}

  	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));
  			
  			this.name = jsonData.tools.tool0.name;
  			this.githubRepositoryLink = jsonData.tools.tool0.githubRepositoryLink;
  			this.version = jsonData.tools.tool0.version;
  		});
  	};

}
