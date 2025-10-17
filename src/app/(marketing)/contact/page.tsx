import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | CRE Data Lab',
  description: 'Get in touch with us about courses or partnerships',
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display text-neutral-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-body-lg text-neutral-600">
              Have questions about our courses? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 mb-16">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
              <p className="text-neutral-600">info@credatalab.com</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Phone</h3>
              <p className="text-neutral-600">(555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Location</h3>
              <p className="text-neutral-600">San Antonio, TX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
