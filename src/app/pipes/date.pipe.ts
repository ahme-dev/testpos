import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "date",
})
export class DatePipe implements PipeTransform {
	transform(value: Date): string {
		const day = value.getDate().toString().padStart(2, "0");
		const month = (value.getMonth() + 1).toString().padStart(2, "0");
		const year = value.getFullYear().toString().slice(-2);

		return `${day}/${month}/${year}`;
	}
}
