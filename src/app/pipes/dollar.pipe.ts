import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "dollar",
})
export class DollarPipe implements PipeTransform {
	transform(value: number | string): string {
		return `$${value}`;
	}
}
