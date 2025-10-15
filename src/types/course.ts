export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  level: string;
  thumbnail: string;
  featured: boolean;
  comingSoon: boolean;
  teachableUrl: string;
  features: string[];
  curriculum: Module[];
  testimonials: Testimonial[];
}