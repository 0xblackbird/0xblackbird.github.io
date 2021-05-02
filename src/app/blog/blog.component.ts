import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import * as moment from 'moment';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})

@Injectable()

export class BlogComponent implements OnInit {

	url = this.appComponent.url;
	blogPosts: string [];

	latestBlogTitle;
	latestBlogDescription;
	latestBlogDate;
	latestBlogLink;
	latestBlogStatus;

	twitter;

	faTwitter = faTwitter;

 	constructor(private http: HttpClient, private appComponent: AppComponent) { }

  	ngOnInit(): void {
  		this.fetchData(this.url);
  	}

  	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));

  			this.blogPosts = jsonData.blogPosts;
  			
  			this.latestBlogTitle = jsonData.latestBlogPost.title;
  			this.latestBlogDescription = jsonData.latestBlogPost.description;
			this.latestBlogDate = jsonData.latestBlogPost.publishDate;
			this.latestBlogLink = jsonData.latestBlogPost.link;
			this.latestBlogStatus = jsonData.latestBlogPost.status;
			
			this.twitter = jsonData.about.twitter;			
  		});
  	};
};