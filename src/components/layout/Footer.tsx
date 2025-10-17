import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">CRE Data Lab</span>
            </div>
            <p className="text-neutral-400 max-w-md">
              Empowering commercial real estate professionals with data analysis skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>info@credatalab.com</li>
              <li>(555) 123-4567</li>
              <li>San Antonio, TX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2025 CRE Data Lab. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
