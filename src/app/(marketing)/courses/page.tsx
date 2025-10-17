import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BookOpen, Clock } from 'lucide-react';

// Mock course data - in a real app this would come from the database
const courses = [
  {
    id: '1',
    slug: 'find-better-deals',
    title: 'Find Better Deals',
    description: 'Learn Python and data analysis for commercial real estate. Perfect for beginners looking to leverage data in their CRE business.',
    duration: '10 weeks',
    level: 'Beginner',
    price: '$997',
  },
];

export const metadata = {
  title: 'Courses | CRE Data Lab',
  description: 'Master commercial real estate data analysis with our expert-led courses',
};

export default function CoursesPage() {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-display text-neutral-900 mb-4">
            Our Courses
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Master commercial real estate data analysis with our comprehensive, hands-on courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} hoverable>
              <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-16 h-16 text-white/90" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.level}</span>
                </div>

                <h3 className="text-heading-3 text-neutral-900">
                  {course.title}
                </h3>

                <p className="text-body text-neutral-600">
                  {course.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <span className="text-heading-3 text-primary-600">
                    {course.price}
                  </span>
                  <Link href={`/courses/${course.slug}`}>
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
