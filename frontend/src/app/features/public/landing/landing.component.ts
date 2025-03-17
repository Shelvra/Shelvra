import { Component } from '@angular/core';
import {BrandingComponent} from './branding/branding.component';

@Component({
  selector: 'app-landing-page',
  imports: [BrandingComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
