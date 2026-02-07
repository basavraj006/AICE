import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = '';
  phone = '';
  course = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      this.course = p['course'] || '';
    });
  }

  sendToWhatsApp() {
    const msg =
`Hello Academic Institute of Computer Education,
Name: ${this.name}
Phone: ${this.phone}
Course: ${this.course}`;

    window.open(
      `https://wa.me/919945470269?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  }
}
