import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wello Horld';

  upperThatcase() {
    this.title = this.title.toUpperCase();
  }
}
