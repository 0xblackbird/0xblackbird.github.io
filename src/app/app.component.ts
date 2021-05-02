import { Component, OnInit, HostBinding, EventEmitter, Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faGithubSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBug, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
/*
console.log(`%c


	             _____   _____    ____    _    _    _____                       ____    _____    ___   __   __ __          __  ____  
	     /\\     |_   _| |  __ \\  |  _ \\  | |  | |  / ____|              /\\     |___ \\  | ____|  / _ \\  \\ \\ / / \\ \\        / / |  _ \\ 
	    /  \\      | |   | |__) | | |_) | | |  | | | (___    ______     /  \\      __) | | |__   | | | |  \\ V /   \\ \\  /\\  / /  | |_) |
	   / /\\ \\     | |   |  _  /  |  _ <  | |  | |  \\___ \\  |______|   / /\\ \\    |__ <  |___ \\  | | | |   > <     \\ \\/  \\/ /   |  _ < 
	  / ____ \\   _| |_  | | \\ \\  | |_) | | |__| |  ____) |           / ____ \\   ___) |  ___) | | |_| |  / . \\     \\  /\\  /    | |_) |
	 /_/    \\_\\ |_____| |_|  \\_\\ |____/   \\____/  |_____/           /_/    \\_\\ |____/  |____/   \\___/  /_/ \\_\\     \\/  \\/     |____/ 
	                                                                                                                                 
`,"color: #00FF00; opacity: 0.4; background: black; font-family: monospace");
*/

console.log(`%c

   _____ _____             ______ __   _     _            _    _     _         _ 	
  / ____|  __ \\           |____  /_ | | |   | |          | |  | |   (_)       | |	
 | (___ | |__) \|  ______      / / | | | |__ | | __ _  ___| | _| |__  _ _ __ __| |	
  \\___ \\|  _  \/  |______|    / /  | | | '_ \\| |/ _\` \|\/ __\| \|\/ \/ \'_ \\| | \'__/ _\` \|	
  ____) | | \\ \\             / /   | | | |_) | | (_| | (__|   <| |_) | | | | (_| |	
 |_____/|_|  \\_\\           /_/    |_| |_.__/|_|\\__,_|\\___|_|\\_\\_.__/|_|_|  \\__,_|	
                                                                                 	
                                                                              	 	
`,"color: #00FF00; opacity: 0.4; background: black; font-family: monospace");

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

@Injectable()

export class AppComponent {

	title = "0xblackbird | Bug bounty blog posts.";

	url = "https://0xblackbird.github.io/data.json";

	currentYear = encodeURIComponent(new Date().getFullYear()); //lol
	randomText = "";
	faGithub = faGithubSquare;
	faTwitter = faTwitter;
	faMail = faEnvelope;

	github = "";
	twitter = "";

	randomTextArray: string[] = ["be1807v", "0xblackbird", "root", "YmUxODA3dgo=", "eyJ1c2VybmFtZSI6ICJhZG1pbiIsICJwYXNzd29yZCI6ICJhSFIwY0hNNkx5OTNkM2N1ZVc5MWRIVmlaUzVqYjIwdmQyRjBZMmcvZGoxa1VYYzBkemxYWjFoalVRbz0ifQo=", "40r219n80qsn2239p096r18opn46sq15", "Hello World!", "MHhibGFja2JpcmQK", "sudo -u#-1 /bin/bash -i", "'\"><--><Svg/Onload=confirm(1)><-->", "sudo find . -exec /bin/bash -i /;"];

	constructor(private http: HttpClient, public translate: TranslateService, private snackBar: MatSnackBar, private elementRef: ElementRef) {
		translate.addLangs(['en', 'nl']);
		translate.setDefaultLang('en');
		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|nl/) ? browserLang : 'en'); // Little fallback
	}

	generateRandomText() {
		var random = Math.floor(Math.random() * (this.randomTextArray.length));
		this.randomText = this.randomTextArray[random];
	};

	ngOnInit() {
		this.generateRandomText();
		this.fetchData(this.url);
		this.elementRef.nativeElement.removeAttribute('ng-version'); // Remove version number	
	}

	fetchData(jsonUrl: string) {
  		this.http.get(jsonUrl).subscribe((response) => { 
  			var jsonData = JSON.parse(JSON.stringify(response));
  			
  			this.twitter = jsonData.about.twitter;
  			this.github = jsonData.about.github;
  		});
  	};
	
	displayMsg() {
		if (localStorage.getItem('msgDisplayed') != 'true') {
			this.snackBar.open(this.translate.instant('appComponent.navigationBar.msg.msg'), this.translate.instant('appComponent.navigationBar.msg.action'), {duration: 4500});
			localStorage.setItem('msgDisplayed', 'true');
		}
	}
}
