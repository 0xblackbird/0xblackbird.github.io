import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DownloadComponent } from './download.component';

describe('DownloadComponent', () => {
	let component: DownloadComponent;
	let fixture: ComponentFixture<DownloadComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [ MatBottomSheetRef ],
			declarations: [ DownloadComponent ],
			providers: [ MatBottomSheetRef ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DownloadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
