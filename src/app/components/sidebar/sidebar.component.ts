import { Component } from "@angular/core";
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
}
