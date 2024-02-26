import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseRecord } from '../models/course-record.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  records: { [key: string]: CourseRecord } = {

  }

  data: { [key: string]: Course } = {
      "c3117": {
        id: 3117,
        title: "Διακριτά Μαθηματικά",
        type: "obligatory",
        ects: 6,
        semester: 1,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3135": {
        id: 3135,
        title: "Εισαγωγή στην Επιστήμη Υπολογιστών",
        type: "obligatory",
        ects: 6,
        semester: 1,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3151": {
        id: 3151,
        title: "Εισαγωγή στην Οικονομική Επιστήμη",
        type: "obligatory",
        ects: 6,
        semester: 1,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3125": {
        id: 3125,
        title: "Εισαγωγή στον Προγραμματισμό Υπολογιστών",
        type: "obligatory",
        ects: 6,
        semester: 1,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3119": {
        id: 3119,
        title: "Μαθηματικά Ι",
        type: "obligatory",
        ects: 6,
        semester: 1,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3254": {
        id: 3254,
        title: "Εισαγωγή στην Διοίκηση Επιχειρήσεων",
        type: "obligatory",
        ects: 6,
        semester: 2,
        semesterType: "summer",
        requirements: [],
        category: null,
        description: null
      },
      "c3214": {
        id: 3214,
        title: "Μαθηματικά ΙΙ",
        type: "obligatory",
        ects: 6,
        semester: 2,
        semesterType: "summer",
        requirements: [],
        category: null,
        description: null
      },
      "c3311": {
        id: 3311,
        title: "Πιθανότητες",
        type: "obligatory",
        ects: 6,
        semester: 2,
        semesterType: "summer",
        requirements: [],
        category: null,
        description: null
      },
      "c3222": {
        id: 3222,
        title: "Προγραμματισμός Υπολογιστών με JAVA",
        type: "obligatory",
        ects: 6,
        semester: 2,
        semesterType: "summer",
        requirements: [],
        category: null,
        description: null
      },
      "c3262": {
        id: 3262,
        title: "Σχεδίαση Ψηφιακών Συστημάτων",
        type: "obligatory",
        ects: 6,
        semester: 2,
        semesterType: "summer",
        requirements: [],
        category: null,
        description: null
      },
      "c3335": {
        id: 3335,
        title: "Δομές Δεδομένων",
        type: "obligatory",
        ects: 7,
        semester: 3,
        semesterType: "winter",
        requirements: [3125, 3222],
        category: null,
        description: null
      },
      "c3365": {
        id: 3365,
        title: "Οργάνωση Συστημάτων Υπολογιστών",
        type: "obligatory",
        ects: 7,
        semester: 3,
        semesterType: "winter",
        requirements: [3135, 3262],
        category: null,
        description: null
      },
      "c3321": {
        id: 3321,
        title: "Προγραμματισμός Υπολογιστών με C++",
        type: "obligatory",
        ects: 8,
        semester: 3,
        semesterType: "winter",
        requirements: [3125, 3222],
        category: null,
        description: null
      },
      "c3230": {
        id: 3230,
        title: "Υπολογιστικά Μαθηματικά",
        type: "obligatory",
        ects: 8,
        semester: 3,
        semesterType: "winter",
        requirements: [3119, 3125],
        category: null,
        description: null
      },
      "c3432": {
        id: 3432,
        title: "Αλγόριθμοι",
        type: "obligatory",
        ects: 7,
        semester: 4,
        semesterType: "summer",
        requirements: [3125, 3222, 3117],
        category: null,
        description: null
      },
      "c3434": {
        id: 3434,
        title: "Αυτόματα και Πολυπλοκότητα",
        type: "obligatory",
        ects: 7,
        semester: 4,
        semesterType: "summer",
        requirements: [3117],
        category: null,
        description: null
      },
      "c3436": {
        id: 3436,
        title: "Βάσεις Δεδομένων",
        type: "obligatory",
        ects: 8,
        semester: 4,
        semesterType: "summer",
        requirements: [3125, 3222],
        category: null,
        description: null
      },
      "c3464": {
        id: 3464,
        title: "Λειτουργικά Συστήματα",
        type: "obligatory",
        ects: 8,
        semester: 4,
        semesterType: "summer",
        requirements: [3125, 3222],
        category: null,
        description: null
      },
      "c3541": {
        id: 3541,
        title: "Ανάλυση και Σχεδίαση Πληροφοριακών Συστημάτων",
        type: "obligatory",
        ects: 8,
        semester: 5,
        semesterType: "winter",
        requirements: [3125, 3222],
        category: null,
        description: null
      },
      "c3571": {
        id: 3571,
        title: "Δίκτυα Επικοινωνιών",
        type: "obligatory",
        ects: 8,
        semester: 5,
        semesterType: "winter",
        requirements: [3365, 3464],
        category: null,
        description: null
      },
      "c3515": {
        id: 3515,
        title: "Λογική",
        type: "obligatory-selective",
        ects: 7,
        semester: 5,
        semesterType: "winter",
        requirements: [],
        category: [4, 7],
        description: null
      },
      "c3155": {
        id: 3155,
        title: "Στατιστική στην Πληροφορική",
        type: "obligatory-selective",
        ects: 7,
        semester: 5,
        semesterType: "winter",
        requirements: [3311,3214],
        category: [1, 3],
        description: null
      },
      "c3531": {
        id: 3531,
        title: "Τεχνητή Νοημοσύνη",
        type: "obligatory-selective",
        ects: 7,
        semester: 5,
        semesterType: "winter",
        requirements: [3214, 3432],
        category: [1, 7, 8],
        description: null
      },
      "c3664": {
        id: 3664,
        title: "Κατανεμημένα Συστήματα",
        type: "obligatory",
        ects: 8,
        semester: 6,
        semesterType: "summer",
        requirements: [3222, 3464],
        category: null,
        description: null
      },
      "c3648": {
        id: 3648,
        title: "Τεχνολογία Λογισμικού",
        type: "obligatory",
        ects: 8,
        semester: 6,
        semesterType: "summer",
        requirements: [3222, 3335],
        category: null,
        description: null
      },
      "c3662": {
        id: 3662,
        title: "Ασφάλεια Πληροφοριακών Συστημάτων",
        type: "obligatory-selective",
        ects: 7,
        semester: 6,
        semesterType: "summer",
        requirements: [3464, 3222],
        category: [8],
        description: null
      },
      "c3672": {
        id: 3672,
        title: "Δίκτυα Υπολογιστών",
        type: "obligatory-selective",
        ects: 7,
        semester: 6,
        semesterType: "summer",
        requirements: [3135, 3464],
        category: [5, 6, 8],
        description: null
      },
      "c3642": {
        id: 3642,
        title: "Επαλήθευση, Επικύρωση και Συντήρηση Λογισμικού",
        type: "obligatory-selective",
        ects: 7,
        semester: 6,
        semesterType: "summer",
        requirements: [3125, 3222],
        category: [6, 8],
        description: null
      },
      "c3511": {
        id: 3511,
        title: "Θεωρία και Υποδείγματα Βελτιστοποίησης",
        type: "obligatory-selective",
        ects: 7,
        semester: 6,
        semesterType: "summer",
        requirements: [3119, 3214],
        category: [2, 3],
        description: null
      },
      "c3543": {
        id: 3543,
        title: "Συστήματα Διαχείρισης και ΑΝάλυσης Δεδομένων",
        type: "obligatory-selective",
        ects: 7,
        semester: 6,
        semesterType: "summer",
        requirements: [3335, 3436],
        category: [1, 6, 7],
        description: null
      },
      
    }

  constructor() { }
}
