import { Component, Input } from "@angular/core";

@Component({
	selector: "app-sidebar-item",
	templateUrl: "./sidebar-item.component.html",
})
export class SidebarItemComponent {
	@Input() title: string = "";
	@Input() selected: boolean = false;
	@Input() secondary: boolean = false;
	@Input() alwaysHighlight: boolean = false;
}
