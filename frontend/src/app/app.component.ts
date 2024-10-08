import { Component, Injector, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';

import { ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

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
  @ViewChild('courseOffcanvas') courseOffcanvas!: ElementRef;

  dataService: DataService = inject(DataService);
  filterService: FilterService = inject(FilterService);
  modalService: NgbModal = inject(NgbModal);
  offcanvasService: NgbOffcanvas = inject(NgbOffcanvas);
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  title = 'frontend';
  viewSelectedCourses: boolean = false;
  viewCompleted: boolean = true;
  viewEcts: boolean = false;
  sorting: 0 | 1 | 2 = 0;
  section: any = {};
  gradeModalConfiguration: any = {
    courseName: "",
    courseId: "",
    courseGrade: 0,
  }
  courseOffcanvasConfiguration: any = {
    courseId: null,
    course: null,
    record: null,
  }

  ectsPopover: any = {
    ects: [38, 46, 54, 60],
    option: 0
  }

  ngOnInit() {
    //this.cdr.detach();
  }

  consoleLog(value: string) {
    console.log(value);
  }

  updateView(): void {
    // Detach to make view update smoother
    this.cdr.detach();
    setTimeout(() => {
      // Update and reattach to keep functionality
      this.cdr.detectChanges();
      this.cdr.reattach();
    }, 10);
  }

  checkTableChildren(tableId: string): boolean {
    var table = document.getElementById(tableId);
    if (table === null) return false;
    var rows = table.getElementsByTagName('tr');
    var count = 0;
    for (var i = 0; i < rows.length; i++) {
      count++;
    }

    return count <= 1 ? true : false;
  }

  getTotalEcts(): number {
    let ects = 0;
    for (let key in this.dataService.records) {
      let record = this.dataService.records[key];
      if (record.selected) {
        ects += this.dataService.data[key].ects;
      }
    }

    return ects;
  }

  getValues(object: any): Course[] {
    // console.log(Object.values(object)[1]);
    return Object.values(object);
  }

  getModuleNames(modules: number[] | null): string[] | null {
    if (modules === null) {
      return null;
    }
    
    let moduleNames: string[] = [];
    for (let i = 0; i < this.filterService.filters[2].sections.length; i++) {
      if (modules.includes(this.filterService.filters[2].sections[i].filterValue)) {
        moduleNames.push(this.filterService.filters[2].sections[i].name);
      }
    }
    console.log(moduleNames);
    return moduleNames;
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

  setCourseGrade(courseId: string, grade: number): void {
    let record: CourseRecord = this.dataService.records[courseId];
    if (record == undefined) {
      record = { id: this.dataService.data[courseId].id, grade: grade, selected: false, category: null };
      this.dataService.records[courseId] = record;
      return;
    }

    record.grade = grade;
  }

  openGradeModal(courseId: string): void {
    this.gradeModalConfiguration.courseName = this.dataService.data[courseId].title;
    this.gradeModalConfiguration.courseId = courseId;
    this.gradeModalConfiguration.courseGrade = this.getCourseGrade(courseId);

    this.modalService.open(this.gradeModal, {centered: true, container: 'app-root'});

  }

  openCourseOffcanvas(courseId: string): void {
    this.courseOffcanvasConfiguration.courseId = courseId;
    this.courseOffcanvasConfiguration.course = this.dataService.data[courseId];
    this.courseOffcanvasConfiguration.record = this.dataService.records[courseId];

    this.offcanvasService.open(this.courseOffcanvas, {position: 'end', animation: true, injector: Injector.create({providers: [{provide: 'conf', useValue: this.courseOffcanvasConfiguration}]})});
  }

  getCourseRequirements(courseId: string): Course[] | null {
    if (this.dataService.data[courseId] === null) return null;
    let data: Course[] = []
    let requirements = this.dataService.data[courseId].requirements;
    for (let i = 0; i < requirements.length; i++) {
      let course = this.dataService.data["c"+requirements[i]];
      data.push(course);
    }

    return data.length > 0 ? data : null;
  }

  // The course needs to meet at least one of the requirements
  isMeetingRequirements(courseId: string): boolean {
    if (this.dataService.data[courseId] === null) return false;

    let requirements = this.dataService.data[courseId].requirements;
    if (requirements.length === 0) return true;
    for (let i = 0; i < requirements.length; i++) {
      let record: CourseRecord = this.dataService.records['c'+requirements[i]];
      if (record != undefined && record.grade >= 5) return true;
    }

    return false;
  }

  // Based on the given course, return the courses that need it as a requirement
  getCoursesNeededBy(courseId: string): Course[] | null {
    if (this.dataService.data[courseId] === null) return null;
    let id: number = this.dataService.data[courseId].id;
    let data: Course[] = [];
    for (let key in this.dataService.data) {
      let course = this.dataService.data[key];
      if (course.requirements.includes(id)) {
        data.push(course);
      }
    }

    return data.length > 0 ? data : null;
  }

  // Get the courses that are assigned to a specific module
  getModuleCourses(module: number): CourseRecord[] | null {
    let data: CourseRecord[] = [];
    for (let key in this.dataService.records) {
      let record = this.dataService.records[key];
      if (record.category === module) {
        data.push(record);
      }
    }

    return data.length > 0 ? data : null;
  }


}
