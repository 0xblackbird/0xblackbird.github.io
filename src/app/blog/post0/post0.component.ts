import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { AppComponent } from '../../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-post0',
	templateUrl: './post0.component.html',
	styleUrls: ['./post0.component.scss']
})

export class Post0Component implements OnInit {

	url = this.appComponent.url;

	faTwitter = faTwitter;

	title;
	publishDate;
	image;
	

	constructor(private http: HttpClient, private snackBar: MatSnackBar, private appComponent: AppComponent) {
	}

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string){

		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));

  			this.title = jsonData.blogPosts.blog0.title;
  			this.publishDate = jsonData.blogPosts.blog0.publishDate;
  			this.image = jsonData.blogPosts.blog0.image;
  		});
	}

	copyTags() {
		const listener = function(ev) {
			ev.preventDefault();
			ev.clipboardData.setData("text/html", "<h1>Never trust a button that copies something to your clipboard!</h1>");
		};
		document.addEventListener("copy", listener);
		document.execCommand("copy");
		document.removeEventListener("copy", listener);
		this.snackBar.open(this.appComponent.translate.instant('blogComponent.post0.body.steps.step1.alert.msg'), this.appComponent.translate.instant('blogComponent.post0.body.steps.step1.alert.action'), {duration: 3500});
	}

	displayPublishDate() {
		this.snackBar.open(this.publishDate, this.appComponent.translate.instant('msgBox.close'), {duration: 3500})
	}

}
