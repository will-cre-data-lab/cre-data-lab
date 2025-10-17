export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  features?: string[];
  curriculum?: Module[];
  published: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
}
