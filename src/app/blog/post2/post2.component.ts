import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from '../../app.component';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {

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

  			this.title = jsonData.blogPosts.blog2.title;
  			this.publishDate = jsonData.blogPosts.blog2.publishDate;
  			this.image = jsonData.blogPosts.blog2.image;
  		});
  	};
	
	displayPublishDate() {
		this.snackBar.open(this.publishDate, this.appComponent.translate.instant('msgBox.close'), {duration: 3500})
	}
}
