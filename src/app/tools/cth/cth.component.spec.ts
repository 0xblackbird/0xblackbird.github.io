import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CthComponent } from './cth.component';
import { AppComponent } from '../../app.component';

describe('CthComponent', () => {
	let component: CthComponent;
	let fixture: ComponentFixture<CthComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientModule, HttpClientTestingModule ],
			declarations: [ CthComponent, AppComponent ],
			providers: [ HttpClient ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CthComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
