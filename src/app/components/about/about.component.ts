import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,AnimateOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
