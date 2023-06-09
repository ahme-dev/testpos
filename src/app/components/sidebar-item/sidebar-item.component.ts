import { Component, Input } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-sidebar-item",
	templateUrl: "./sidebar-item.component.html",
})
export class SidebarItemComponent {
	@Input() title: string = "";
	@Input() selected: boolean = false;
	@Input() secondary: boolean = false;
	@Input() alwaysHighlight: boolean = false;

	@Input() icon: IconProp = faQuestion;
	@Input() altIcon: IconProp | null = null;
}
