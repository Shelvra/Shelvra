import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderbarComponent } from './landing/headerbar/headerbar.component';
import { LoginComponent } from './landing/login/login.component';
import { TaglineComponent } from './landing/tagline/tagline.component';
import { DemoComponent } from './landing/demo/demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderbarComponent, LoginComponent, TaglineComponent, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
