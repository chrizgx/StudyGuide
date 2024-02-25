import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filters: any = [
    {
      name: "Εξάμηνο",
      sections: [
        { name: "1ο Εξάμηνο", filterValue: 1, filterFunction: this.semesterNumberFilter },
        { name: "2ο Εξάμηνο", filterValue: 2, filterFunction: this.semesterNumberFilter },
        { name: "3ο Εξάμηνο", filterValue: 3, filterFunction: this.semesterNumberFilter },
        { name: "4ο Εξάμηνο", filterValue: 4, filterFunction: this.semesterNumberFilter },
        { name: "5ο Εξάμηνο", filterValue: 5, filterFunction: this.semesterNumberFilter },
        { name: "6ο Εξάμηνο", filterValue: 6, filterFunction: this.semesterNumberFilter },
        { name: "7ο Εξάμηνο", filterValue: 7, filterFunction: this.semesterNumberFilter },
        { name: "8ο Εξάμηνο", filterValue: 8, filterFunction: this.semesterNumberFilter},
      ],
    },

    {
      name: "Χειμερινό / Εαρινό",
      sections: [
        { name: "Χειμερινό", filterValue: "winter", filterFunction: this.semesterTypeFilter},
        { name: "Εαρινό", filterValue: "summer", filterFunction: this.semesterTypeFilter},
      ],
    },

    {
      name: "Κύκλος Σπουδών",
      sections: [
        { name: "1. Επιστήμη Δεδομένων", filterValue: 1, filterFunction: this.moduleFilter },
        { name: "2. Επιχειρησιακή Έρευνα", filterValue: 2, filterFunction: this.moduleFilter },
        { name: "3. Εφαρμοσμένα Μαθηματικά", filterValue: 3, filterFunction: this.moduleFilter },
        { name: "4. Θεωρητική Πληροφορική", filterValue: 4, filterFunction: this.moduleFilter },
        { name: "5. Συστήματα και Δίκτυα", filterValue: 5, filterFunction: this.moduleFilter},
        { name: "6. Συστήματα Λογιμικού", filterValue: 6, filterFunction: this.moduleFilter },
        { name: "7. Διαχείριση Δεδομένων & Γνώσεων", filterValue: 7, filterFunction: this.moduleFilter },
        { name: "8. Κυβερνοασφάλεια", filterValue: 8, filterFunction: this.moduleFilter },
      ],
    },

    {
      name: "Επιλεγμένοι Κύκλοι Σπουδών",
      sections: [
        { name: "DEMO", },
        { name: "DEMO" },
      ],
    }
  ];

  constructor() { }

  semesterNumberFilter(semester: number, course: Course): boolean {
    return course.semester === semester;
  }

  semesterTypeFilter(semester: string, course: Course): boolean {
    return course.semesterType === semester;
  }

  moduleFilter(module: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, course: Course): boolean {
    return course.category != null ? course.category.includes(module) : false;
  }
}
