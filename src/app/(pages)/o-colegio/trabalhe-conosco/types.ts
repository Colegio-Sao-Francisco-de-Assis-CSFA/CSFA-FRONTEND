export interface Job {
    id: string;
    title: string;
    company: string;
    companyRating: number;
    salary: string;
    type: string;
    schedule: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    applicants?: string;
    badges?: string[];
}

export interface ApplicationForm {
    name: string;
    email: string;
    phone: string;
    message: string;
    file: File | null;
}

export interface Toast {
    show: boolean;
    message: string;
    type: 'success' | 'error';
}
