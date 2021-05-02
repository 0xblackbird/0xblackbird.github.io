import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule, HttpClientTestingModule ],
			declarations: [ AppComponent ],
			providers: [ HttpClientModule ]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title '0xblackbird | Bug bounty blog posts.'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('0xblackbird | Bug bounty blog posts.');
	});

	/*
	// Onnodige check (volgens mij)
	it('should render title', () => {
			const fixture = TestBed.createComponent(AppComponent);
			fixture.detectChanges();
			const compiled = fixture.nativeElement;
			expect(compiled.getElementsByTagName('title').textContent).toContain('0xblackbird | Bug bounty blog posts.');
	});
	*/
});
