import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

declare var particlesJS: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

@Injectable()

export class HomeComponent implements OnInit {

	url = this.appComponent.url;
	toolName: string;
	tool0Status: string;
	toolName1: string;
	latestBlogTitle = "";
	latestBlogDescription = "";
	latestBlogDate = "";
	latestBlogLink = "";
	latestTimeAgo = "";
	latestBlogStatus = "";


	constructor(private http: HttpClient, private appComponent: AppComponent) {
		particlesJS.load('particles-js', '/assets/js/particles.json');
	};


	ngOnInit() {
		this.fetchData(this.url);
	};
	
	fetchData(jsonUrl: string) {
  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));

  			this.toolName = jsonData.tools.tool0.name;
  			this.tool0Status = jsonData.tools.tool0.status;
  			this.toolName1 = jsonData.tools.tool1.name;
  			
  			this.latestBlogTitle = jsonData.latestBlogPost.title;
  			this.latestBlogDescription = jsonData.latestBlogPost.description;
			this.latestBlogDate = jsonData.latestBlogPost.publishDate;
			this.latestBlogLink = jsonData.latestBlogPost.link;
			this.latestBlogStatus = jsonData.latestBlogPost.status;
		})
  	};

};