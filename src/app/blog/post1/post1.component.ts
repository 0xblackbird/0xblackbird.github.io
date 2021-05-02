import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { AppComponent } from '../../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-post1',
	templateUrl: './post1.component.html',
	styleUrls: ['./post1.component.scss']
})

export class Post1Component implements OnInit {

	url = this.appComponent.url;

	faTwitter = faTwitter;

	title;
	publishDate;
	image;
	
	constructor(private http: HttpClient, private appComponent: AppComponent, private snackBar: MatSnackBar) {
	}

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));

  			this.title = jsonData.blogPosts.blog1.title;
  			this.publishDate = jsonData.blogPosts.blog1.publishDate;
  			this.image = jsonData.blogPosts.blog1.image;
  		});
  	};

	displayPublishDate() {
		this.snackBar.open(this.publishDate, this.appComponent.translate.instant('msgBox.close'), {duration: 3500})
	}


}
