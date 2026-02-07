import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AICE Computers Vijayapur | Computer Education Institute');

    this.meta.updateTag({
      name: 'description',
      content: 'Academic Institute of Computer Education Vijayapur offering computer courses, tally, software and diploma programs.'
    });
  }
}
