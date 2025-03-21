import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderbarComponent } from './landing/headerbar/headerbar.component';
import { LoginComponent } from './landing/login/login.component';
import { TaglineComponent } from './landing/tagline/tagline.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderbarComponent, LoginComponent, TaglineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
