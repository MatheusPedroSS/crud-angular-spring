import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  listAll(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Java', category: 'back-end'}
    ]
  }
}
