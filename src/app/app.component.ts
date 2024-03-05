import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneWebComponentsAngularModule } from '@one/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneWebComponentsAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
