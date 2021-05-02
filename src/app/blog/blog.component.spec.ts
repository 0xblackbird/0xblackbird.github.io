import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog.component';
import { AppComponent } from '../app.component';

describe('BlogComponent', () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			declarations: [ BlogComponent, AppComponent ],
			providers: [ AppComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
