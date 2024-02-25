import { DescriptionSection } from './description-section.model';

export interface Course {
    id: number;
    title: string;
    type: "obligatory" | "obligatory-selective" | "selective";
    ects: number;
    semester: number;
    semesterType: "winter" | "summer";
    requirements: number[];
    category: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 )[];
    description: DescriptionSection[];
}