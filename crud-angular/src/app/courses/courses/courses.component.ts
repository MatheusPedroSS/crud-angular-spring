import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

   courses$: Observable<Course[]>;
   displayedColumns = ['name', 'category']

   constructor(private coursesService: CoursesService) {
    this.courses$ = coursesService.listAll();
   }

}
