# CRE Data Lab

A modern, professional website for CRE Data Lab offering commercial real estate data analysis courses.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Vercel Postgres)
- **ORM:** Prisma
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Vercel Postgres)
- Resend API key for email functionality

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cre-data-lab
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - Resend API key for emails
- `NEXT_PUBLIC_APP_URL` - Your app URL (http://localhost:3000 for development)

4. Set up the database:
```bash
npm run db:generate
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
cre-data-lab/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (marketing)/       # Marketing pages (with layout)
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── about/         # About page
│   │   │   ├── courses/       # Courses listing
│   │   │   └── contact/       # Contact page
│   │   ├── api/               # API routes
│   │   │   ├── contact/       # Contact form handler
│   │   │   └── newsletter/    # Newsletter signup
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, CTA, etc)
│   │   └── forms/             # Form components
│   ├── lib/                   # Utility functions
│   │   ├── db.ts              # Prisma client
│   │   ├── email.ts           # Email functions
│   │   ├── utils.ts           # Helper utilities
│   │   └── validations.ts     # Zod schemas
│   └── types/                 # TypeScript types
├── prisma/
│   └── schema.prisma          # Database schema
└── public/                    # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio

## Features

- 🎨 Modern, professional design with custom Tailwind configuration
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible (WCAG AA compliant)
- 📧 Contact form with email notifications
- 📰 Newsletter signup
- 🎓 Course catalog and details
- 🔒 Type-safe with TypeScript
- 🎯 Form validation with Zod
- 💾 PostgreSQL database with Prisma ORM

## Design System

### Colors

- **Primary:** Blue (#6366F1) - Main brand color
- **Secondary:** Light blue (#0EA5E9)
- **Neutral:** Slate gray scale
- **Accent:** Purple and light blue

### Typography

- **Font:** Inter (Google Fonts)
- **Sizes:** Hero (72px), Display (56px), Headings (40px, 32px, 24px), Body (20px, 16px, 14px)

## Database Schema

The application uses PostgreSQL with the following models:

- **Course** - Course information
- **User** - User accounts
- **Enrollment** - Course enrollments
- **ContactSubmission** - Contact form submissions
- **NewsletterSubscriber** - Newsletter subscribers

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Set up Vercel Postgres database
5. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel project settings:
- `DATABASE_URL`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_APP_URL`

## Email Configuration

The application uses Resend for transactional emails:

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Get your API key
4. Add to `.env` as `RESEND_API_KEY`

Emails sent:
- Contact form confirmation (to sender)
- Contact form notification (to admin)
- Newsletter welcome email

## Next Steps

1. **Add real content:**
   - Update course data with real information
   - Add course detail pages
   - Add course images/thumbnails

2. **Set up production database:**
   - Use Vercel Postgres or your preferred provider
   - Run migrations

3. **Configure email:**
   - Set up Resend account
   - Verify domain
   - Update email templates

4. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel
   - Configure custom domain

## License

MIT
