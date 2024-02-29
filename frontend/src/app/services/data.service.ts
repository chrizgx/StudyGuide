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
      "c3751": {
        id: 3751,
        title: "Αξιολόγηση Επενδύσεων με Εφαρμογές στην Πληροφορική",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [],
        category: null,
        description: null
      },
      "c3761": {
        id: 3761,
        title: "Ασφάλεια Δικτύων",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3571, 3672],
        category: [5, 8],
        description: null
      },
      "c3771": {
        id: 3771,
        title: "Ασύρματα Δίκτυα και Κινητές Επικοινωνίες",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3571, 3672],
        category: [5],
        description: null
      },
      "c3781": {
        id: 3781,
        title: "Γραφικά Υπολογιστών",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3119, 3321],
        category: [6],
        description: null
      },
      "c3632": {
        id: 3632,
        title: "Ειδικά Θέματα Αλγορίθμων",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3335, 3432],
        category: [2, 4],
        description: null
      },
      "c3614": {
        id: 3614,
        title: "Εφαρμοσμένες Πιθανότητες και Πιθανοτικοί Αλγόριθμοι",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3311, 3214],
        category: [2, 3, 4],
        description: null
      },
      "c6127": {
        id: 6127,
        title: "Μεθόδοι Στατιστικής και Μηχανικής Μάθησης (ΣΤΑ)",
        type: "selective",
        ects: 8,
        semester: 7,
        semesterType: "winter",
        requirements: [3155],
        category: [1],
        description: null
      },
      "c3634": {
        id: 3634,
        title: "Μεταγλωττιστές",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3335, 3434],
        category: [5, 6],
        description: null
      },
      "c3745": {
        id: 3745,
        title: "Μηχανική Μάθηση",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3214, 3531],
        category: [1, 7, 8],
        description: null
      },
      "c3818": {
        id: 3818,
        title: "Οικονομικά Δικτύων",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3135, 3571],
        category: [2, 5],
        description: null
      },
      "c8143": {
        id: 8143,
        title: "Συνδυαστική Βελτιστοποίηση (ΔΕΤ)",
        type: "selective",
        ects: 8,
        semester: 7,
        semesterType: "winter",
        requirements: [],
        category: [2, 4],
        description: null
      },
      "c3882": {
        id: 3882,
        title: "Τεχνολογία Πολυμέσων",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3571, 3321],
        category: [5],
        description: null
      },
      "c3747": {
        id: 3747,
        title: "Τεχνολογίες και Προγραμματισμός Εφαρμογών στον Ιστό",
        type: "selective",
        ects: 6,
        semester: 7,
        semesterType: "winter",
        requirements: [3125, 3222],
        category: [6],
        description: null
      },
      "c3783": {
        id: 3783,
        title: "Αλληλεπίδραση Ανθρώπου Υπολογιστή",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3125, 3222, 3531],
        category: [6, 7],
        description: null
      },
      "c6005": {
        id: 6005,
        title: "Ανάλυση Δεδομένων (ΣΤΑ)",
        type: "selective",
        ects: 8,
        semester: 8,
        semesterType: "summer",
        requirements: [3155],
        category: [1],
        description: null
      },
      "c3862": {
        id: 3862,
        title: "Ανάλυση Επίδοσης Συστημάτων και Δικτύων",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3311, 3571],
        category: [2, 5],
        description: null
      },
      "c3842": {
        id: 3842,
        title: "Ανάπτυξη Εφαρμογών Πληροφοριακών Συστημάτων",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3436, 3648],
        category: [7],
        description: null
      },
      "c3513": {
        id: 3513,
        title: "Αριθμητική Γραμμική Άλγεβρα",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3214, 3230],
        category: [1, 3],
        description: null
      },
      "c3561": {
        id: 3561,
        title: "Αρχιτεκτονική Υπολογιστών",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3365],
        category: [5],
        description: null
      },
      "c6082": {
        id: 6082,
        title: "Γραμμική Άλγεβρα ΙΙ (ΣΤΑ)",
        type: "selective",
        ects: 7.5,
        semester: 8,
        semesterType: "summer",
        requirements: [3214],
        category: [3],
        description: null
      },
      "c3612": {
        id: 3612,
        title: "Ειδικά Θέματα Διακριτών Μαθηματικών",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3117],
        category: [3, 4],
        description: null
      },
      "c3741": {
        id: 3741,
        title: "Εννοιλογική Μοντελοποίηση Συστημάτων",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [],
        category: [6, 7],
        description: null
      },
      "c3743": {
        id: 3743,
        title: "Εξόρυξη Γνώσης",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3436, 3531],
        category: [1, 7],
        description: null
      },
      "c2610": {
        id: 2610,
        title: "Επιχειρησιακή Πολιτική και Στρατηγική (ΟΔΕ)",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [],
        category: [],
        description: null
      },
      "c3713": {
        id: 3713,
        title: "Θεωρία Παιγνίων και Αποφάσεων",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3119, 3311],
        category: [2, 4],
        description: null
      },
      "c3814": {
        id: 3814,
        title: "Θεωρία Πληροφορίας",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3311],
        category: [3],
        description: null
      },
      "c7116": {
        id: 7116,
        title: "Λογιστικά Πληροφ. Συστη. μέσω Διαδικτύου (ΛΟΧΡΗ)",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [],
        category: [],
        description: null
      },
      "c8116": {
        id: 8116,
        title: "Μαθηματικός Προγραμματισμός (ΔΕΤ)",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [],
        category: [2],
        description: null
      },
      "c6142": {
        id: 6142,
        title: "Πιθανότητες ΙΙ (ΣΤΑ)",
        type: "selective",
        ects: 7.5,
        semester: 8,
        semesterType: "summer",
        requirements: [3311],
        category: [3],
        description: null
      },
      "c6125": {
        id: 6125,
        title: "Προσομοίωση (ΣΤΑ)",
        type: "selective",
        ects: 7,
        semester: 8,
        semesterType: "summer",
        requirements: [3311],
        category: [3],
        description: null
      },
      "c3791": {
        id: 3791,
        title: "Στοιχεία Δικαίου της Πληροφορίας",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3135],
        category: [8],
        description: null
      },
      "c3644": {
        id: 3644,
        title: "Συστήματα Ανάκτησης Πληροφοριών",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3531, 3543],
        category: [7],
        description: null
      },
      "c3584": {
        id: 3584,
        title: "Τεχνολογική Καινοτομία και Επιχειρηματικότητα",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3135, 3125],
        category: [],
        description: null
      },
      "c3517": {
        id: 3517,
        title: "Υπολογισιμότητα και Πολυπλοκότητα",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [3434, 3432],
        category: [4],
        description: null
      },
      "c6023": {
        id: 6023,
        title: "Γραμμικά Μοντέλα (ΣΤΑ)",
        type: "selective",
        ects: 8,
        semester: 8,
        semesterType: "summer",
        requirements: [3155],
        category: [1],
        description: null
      },
      "c3802": {
        id: 3802,
        title: "Πτυχιακή Εργασία",
        type: "selective",
        ects: 6,
        semester: 8,
        semesterType: "summer",
        requirements: [],
        category: [],
        description: null
      },
    }

  constructor() { }
}
