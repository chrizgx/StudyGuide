import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';

import { Course } from './models/course.model';
import { CourseRecord } from './models/course-record.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NgbModule],
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
    
  }

  getValues(object: any): Course[] {
    console.log(Object.values(object)[1]);
    return Object.values(object);
  }

  getModuleNames(modules: number[] | null): string {
    if (modules === null) {
      return "";
    }
    
    let moduleNames = "";
    for (let i = 0; i < this.filterService.filters[2].sections.length; i++) {
      if (modules.includes(this.filterService.filters[2].sections[i].filterValue)) {
        moduleNames += this.filterService.filters[2].sections[i].name + ",\n";
      }
    }

    return moduleNames.slice(0, -2);
  }

  isCategorySelected(category: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, courseId: string): boolean {
    let record: CourseRecord = this.dataService.records[courseId];
    return record != null ? record.category === category : false;
  }

  selectCategory(category: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, courseId: string): void {
    let record: CourseRecord = this.dataService.records[courseId];
    // If null, create record inside records
    if (record == undefined) {
      record = { id: this.dataService.data[courseId].id, grade: 0, selected: false, category: category };
      this.dataService.records[courseId] = record;
      return;
    }
    // If not null, change category
    record.category = record.category === category ? null : category;
  }

}
