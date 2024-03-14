import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

   courses: Course[];
   displayedColumns = ['name', 'category']

   constructor() {
    this.courses = [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Java', category: 'back-end'}
    ]
   }

}
