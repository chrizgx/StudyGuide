import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';

import { ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  @ViewChild('gradeModal') gradeModal!: ElementRef;

  dataService: DataService = inject(DataService);
  filterService: FilterService = inject(FilterService);
  modalService: NgbModal = inject(NgbModal);

  title = 'frontend';
  viewSelectedCourses: boolean = false;
  sorting: 0 | 1 | 2 | 3 = 0;
  section: any = {};
  gradeModalConfiguration: any = {
    courseName: "",
    courseId: "",
    courseGrade: 0,
  }

  ngOnInit() {
    
  }

  consoleLog(value: string) {
    console.log(value);
  }

  getValues(object: any): Course[] {
    // console.log(Object.values(object)[1]);
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

  isCourseSelected(courseId: string): boolean {
    let record: CourseRecord = this.dataService.records[courseId];
    return record != undefined ? record.selected : false;
  }

  selectCourse(courseId: string): void {
    let record: CourseRecord = this.dataService.records[courseId];
    // If null, create record inside records
    if (record == undefined) {
      record = { id: this.dataService.data[courseId].id, grade: 0, selected: true, category: null };
      this.dataService.records[courseId] = record;
      return;
    }
    // If not null, change selected
    record.selected = !record.selected;
  }

  getCourseGrade(courseId: string): number {
    let record: CourseRecord = this.dataService.records[courseId];
    return record != undefined ? record.grade : 0;
  }

  openGradeModal(courseId: string): void {
    this.gradeModalConfiguration.courseName = this.dataService.data[courseId].title;
    this.gradeModalConfiguration.courseId = courseId;
    this.gradeModalConfiguration.courseGrade = this.getCourseGrade(courseId);

    this.modalService.open(this.gradeModal, {centered: true, container: 'app-root'});

  }
}
