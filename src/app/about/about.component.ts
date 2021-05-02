import { Component, OnInit, ElementRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { faTwitter, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faBug, faKey, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})

@Injectable()

export class AboutComponent implements OnInit {

	url = this.appComponent.url;

	faGithub = faGithubSquare;
	faTwitter = faTwitter;
	faEnvelope = faEnvelope;
	faBug = faBug;
	faUser = faUser;
	faKey = faKey;

	intigritiProfile = "";
	bugbountyhunter = "";
	github = "";
	twitter = "";
	
	constructor(private http: HttpClient, private appComponent: AppComponent) { }

	ngOnInit(): void {
		this.fetchData(this.url);
	}

	fetchData(jsonUrl: string) {

  		this.http.get(jsonUrl).subscribe((response) => { 
  			var data = JSON.stringify(response);
  			var jsonData = JSON.parse(data);
  			
  			this.intigritiProfile = jsonData.about.intigriti;
  			this.bugbountyhunter = jsonData.about.bugbountyhunter;
  			this.twitter = jsonData.about.twitter;
  			this.github = jsonData.about.github;
  		});
  	};
}