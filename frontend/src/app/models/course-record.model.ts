export interface CourseRecord {
    id: number;
    grade: number;
    selected: boolean;
    category: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null;
}