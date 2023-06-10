import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
	faCircleQuestion,
	faCommentDots,
	faFileLines,
	faRectangleList,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
	faArrowRightFromBracket,
	faBriefcase,
	faMoneyBills,
	faSliders,
} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
	faMoneyBills = faMoneyBills;
	faUser = faUser;
	faBriefcase = faBriefcase;
	faRectangleList = faRectangleList;
	faFileLines = faFileLines;
	faSliders = faSliders;
	faCircleQuestion = faCircleQuestion;
	faCommentDots = faCommentDots;
	faArrowRightFromBracket = faArrowRightFromBracket;

	constructor(private router: Router) {}

	get currentUrl() {
		return this.router.url;
	}

	changeRoute(route: string) {
		console.log("Changing route to", this.currentUrl);
		this.router.navigate([route]);
	}
}
