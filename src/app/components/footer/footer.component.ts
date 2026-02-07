import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],  // 🔥 REQUIRED
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  openWhatsApp() {
    window.open(
      'https://wa.me/919945470269?text=Hello%20AICE%20Computers,%20I%20would also like to know more about your courses.',
      '_blank'
    );
  }
}
