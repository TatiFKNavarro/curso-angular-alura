import { Component } from "@angular/core";

@Component({
  selector: "ap-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
  public isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }
}
