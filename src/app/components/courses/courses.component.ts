import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  selectedCourse: any = null;

  courses = [
    {
      name: 'Computer Basic and MS-Office',
      duration: '2 Months',
      category: 'basic',
      popular: true,
      icon: 'computer',
      details: [
        'Computer fundamentals',
        'MS Word, Excel, PowerPoint',
        'Internet & Email',
        'Typing practice'
      ]
    },
    {
      name: 'Tally Prime with GST',
      duration: '2 Months',
      category: 'accounting',
      popular: true,
      icon: 'chart',
      details: [
        'Accounting fundamentals',
        'GST billing & returns',
        'Tally Prime practical',
        'Real-time examples'
      ]
    },
    {
      name: 'Desktop Publishing (DTP)',
      duration: '2 Months',
      category: 'design',
      popular: false,
      icon: 'design',
      details: [
        'Photoshop basics',
        'CorelDRAW',
        'Page layout design',
        'Printing concepts'
      ]
    },
    {
      name: 'Diploma in Advance Accounting (DAA)',
      duration: '2 Months',
      category: 'accounting',
      popular: false,
      icon: 'ledger',
      details: [
        'Advanced accounting',
        'Tally with GST',
        'Income tax basics',
        'Practical accounting'
      ]
    },
    {
      name: 'Diploma in Software Engineering (DSE)',
      duration: '6 Months',
      category: 'software',
      popular: true,
      icon: 'code',
      details: [
        'Programming fundamentals',
        'Web technologies',
        'Database basics',
        'Final project'
      ]
    },
    {
      name: 'Diploma in Computer Hardware & Networking (DCHN)',
      duration: '4 Months',
      category: 'hardware',
      popular: false,
      icon: 'hardware',
      details: [
        'Computer hardware',
        'Networking basics',
        'LAN/WAN setup',
        'Troubleshooting'
      ]
    },
    {
      name: 'Advanced Diploma in Software Engineering (ADSE)',
      duration: '6 Months',
      category: 'software',
      popular: false,
      icon: 'layers',
      details: [
        'Advanced programming',
        'Frameworks',
        'Database management',
        'Industry project'
      ]
    },
    {
      name: 'DAA + DTP',
      duration: '6 Months',
      category: 'combo',
      popular: false,
      icon: 'combo',
      details: [
        'Tally with GST',
        'DTP tools',
        'Office automation',
        'Practical training'
      ]
    },
    {
      name: 'Diploma in Computer Teacher Training Course (DCTTC)',
      duration: '4 Months',
      category: 'teaching',
      popular: false,
      icon: 'teacher',
      details: [
        'Teaching methodology',
        'Computer syllabus',
        'Presentation skills',
        'Classroom training'
      ]
    }
  ];

  constructor(private router: Router) {}

  openDetails(course: any) {
    this.selectedCourse = course;
  }

  closeDetails() {
    this.selectedCourse = null;
  }

  enroll(course: string) {
    this.router.navigate(['/register'], {
      queryParams: { course }
    });
  }
}
