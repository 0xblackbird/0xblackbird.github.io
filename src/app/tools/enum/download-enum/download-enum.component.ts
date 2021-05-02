import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
	selector: 'app-download-enum',
	templateUrl: './download-enum.component.html',
	styleUrls: ['./download-enum.component.scss']
})
export class DownloadEnumComponent implements OnInit {

	url = this.appComponent.url;
	name: string;
	localDownloadPath: string;
	githubRepositoryLink: string;
	version: string;

  	constructor(private http: HttpClient, private _bottomSheetRef: MatBottomSheetRef<DownloadEnumComponent>, private appComponent: AppComponent) { }

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));
  			
  			this.name = jsonData.tools.tool1.name;
  			this.localDownloadPath = jsonData.tools.tool1.localDownloadPath;
  			this.githubRepositoryLink = jsonData.tools.tool1.githubRepositoryLink;
  			this.version = jsonData.tools.tool1.version;
  		});
  	};
}
