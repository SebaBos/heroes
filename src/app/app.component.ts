import {Component, HostBinding, Renderer2} from '@angular/core';
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  toggleControl = new FormControl(false);

  @HostBinding('class') className = '';

  constructor(private renderer: Renderer2, private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#fafafa');
    this.toggleControl.valueChanges.subscribe((darkTheme) => {
      const darkModeClassName = 'darkTheme';
      this.className = darkTheme ? darkModeClassName : '';

      if (darkTheme) {
        this.renderer.setStyle(document.body, 'background-color', '#303030');
        this.overlay.getContainerElement().classList.add(darkModeClassName);
      } else {
        this.renderer.setStyle(document.body, 'background-color', '#fafafa');
        this.overlay.getContainerElement().classList.remove(darkModeClassName);
      }
    });
  }
}
