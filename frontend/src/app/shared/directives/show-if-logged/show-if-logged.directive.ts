import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
  selector: "[showIfLogged]",
})
export class ShowIfLoggedDirective implements OnInit {
  currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser().subscribe((user) => {
      if (user) {
        this.renderer.setElementStyle(
          this.element.nativeElement,
          "display",
          this.currentDisplay
        );
      } else {
        this.renderer.setElementStyle(
          this.element.nativeElement,
          "display",
          this.currentDisplay
        );
        this.renderer.setElementStyle(
          this.element.nativeElement,
          "display",
          "none"
        );
      }
    });
  }
}
