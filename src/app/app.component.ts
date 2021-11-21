import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Big Blue Sky';
  main__btnText = 'Open Menu';
  openMenuBtnClicked = false;
  toggleBlackBackground = false;

  onClick() {
    this.openMenuBtnClicked = !this.openMenuBtnClicked;
    this.main__btnText = this.openMenuBtnClicked ? 'Close Menu' : 'Open Menu';

    /** Reinforce black background overlay. */
    if (this.toggleBlackBackground) {
      this.toggleBlackBackground = !this.toggleBlackBackground;
    } else {
      setTimeout(
        () => (this.toggleBlackBackground = !this.toggleBlackBackground),
        1000
      );
    }
  }
}
