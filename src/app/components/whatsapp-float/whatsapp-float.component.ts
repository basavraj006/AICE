import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrls: ['./whatsapp-float.component.css']
})
export class WhatsappFloatComponent {

  whatsappNumber = '919945470269';
  phoneNumber = '9945470269';
  email = 'aicecomputers@gmail.com';

  openWhatsApp() {
    const message =
      'Hello AICE Computers, I would like to know more about your courses.';
    window.open(
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
