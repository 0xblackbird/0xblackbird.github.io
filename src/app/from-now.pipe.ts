import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core'

@Pipe({
	name: 'fromNow' || 'fromNow'
})

export class FromNowPipe implements PipeTransform {

	constructor(private translate?: TranslateService) {}

	transform(value: unknown, ...args: unknown[]): unknown {
		moment.locale(this.translate.currentLang);
		return `${moment(value, "DD/MM/YYYY, hh:mm:ss").fromNow()}`;
	}

}
