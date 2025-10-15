import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

export const metadata: Metadata = {
  title: "Courses | CRE Data Lab",
  description: "Professional training courses for commercial real estate professionals. Learn Python, data analysis, and automation to find better deals and make smarter investments.",
};

export default function CoursesPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="heading-1 text-gray-900 mb-4">
            Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master data-driven commercial real estate with our comprehensive training programs.
            From Python fundamentals to advanced analytics, we&apos;ll help you build the skills
            to find better deals and make smarter investments.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Empty State (if no courses) */}
        {courses.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              More courses coming soon!
            </h2>
            <p className="text-gray-600">
              We&apos;re working on exciting new training programs.
              Check back soon or join our newsletter to be notified when they launch.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}