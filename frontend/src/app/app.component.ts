import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';

import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  dataService: DataService = inject(DataService);
  filterService: FilterService = inject(FilterService);

  title = 'frontend';
  viewSelectedCourses: boolean = false;
  sorting: 0 | 1 | 2 | 3 = 0;
  section: any = {};

  ngOnInit() {
    this.getSection();
  }

  getSection() {
    // this.section = this.filterService.filters[this.sorting];
  }

  onSortingChange() {
    this.getSection();
    console.log(this.sorting);
  }

  getValues(object: any): Course[] {
    console.log(Object.values(object)[1]);
    return Object.values(object);
  }

}
