# CRE Data Lab - Build Instructions for Claude Code

## Project Overview

Build a professional multi-product landing platform for CRE Data Lab using Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL. The site serves as a hub for courses (linked to Teachable) and future SaaS tools.

**Live Site Goal:** credatalab.com  
**Deployment:** Vercel  
**Timeline:** 3-4 days

---

## Tech Stack

- **Framework:** Next.js 14.2+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Vercel Postgres)
- **ORM:** Prisma
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Hosting:** Vercel
- **Icons:** Lucide React

---

## Build Order & Prompts

### Phase 1: Project Setup & Configuration (Day 1, ~2 hours)

**Prompt 1.1: Initialize Project**
```
Create a new Next.js 14 project with the following specifications:

- Project name: credatalab
- TypeScript: Yes
- App Router: Yes
- Tailwind CSS: Yes
- src/ directory: Yes
- Import alias: @/* 

Install these additional dependencies:
- @prisma/client
- prisma (dev)
- react-hook-form
- @hookform/resolvers
- zod
- resend
- lucide-react
- clsx
- tailwind-merge
- tsx (dev)

Set up the basic folder structure:
src/
├── app/
├── components/
│   ├── layout/
│   ├── home/
│   ├── courses/
│   ├── tools/
│   ├── forms/
│   └── ui/
├── lib/
├── types/
└── data/

Create .env.example with these variables:
DATABASE_URL=""
RESEND_API_KEY=""
RESEND_FROM_EMAIL=""
NEXT_PUBLIC_SITE_URL=""
NEXT_PUBLIC_TEACHABLE_SCHOOL_URL=""
NEXT_PUBLIC_COURSE_URL=""
```

**Prompt 1.2: Configure Tailwind**
```
Update tailwind.config.ts with custom brand colors:

Add a 'brand' color palette (shades 50-900) using professional blue tones.
Add custom font family using Inter (import from next/font/google).
Add custom spacing and components layer classes:
- .section (py-16 md:py-24)
- .container-custom (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
- .heading-1, .heading-2, .heading-3 (responsive heading sizes)
- .text-gradient (gradient text effect)

Update globals.css with:
- Tailwind imports
- Custom base layer styles
- Component layer classes
- Utility layer classes
```

**Prompt 1.3: Set Up Prisma & Database**
```
Initialize Prisma with PostgreSQL:

1. Run: npx prisma init
2. Create schema with these models:

WaitlistSignup:
- id (String, cuid, primary key)
- email (String)
- productType (String - 'course' or 'tool')
- productSlug (String)
- source (String, optional)
- createdAt (DateTime)
- updatedAt (DateTime)
- Unique constraint on [email, productSlug]
- Indexes on email, productSlug, createdAt

ContactSubmission:
- id (String, cuid, primary key)
- name (String)
- email (String)
- subject (String, optional)
- message (String)
- createdAt (DateTime)
- Indexes on email, createdAt

NewsletterSubscriber:
- id (String, cuid, primary key)
- email (String, unique)
- status (String, default 'active')
- source (String, optional)
- createdAt (DateTime)
- updatedAt (DateTime)
- Indexes on email, status

3. Create lib/prisma.ts with singleton pattern to prevent multiple instances
4. Generate Prisma client
```

**Prompt 1.4: Create Utility Functions**
```
Create lib/utils.ts with these functions:

1. cn(...inputs) - Merge Tailwind classes using clsx and tailwind-merge
2. formatPrice(price: number) - Format as USD currency
3. formatDate(date: Date) - Format as "Month Day, Year"
4. truncate(text: string, length: number) - Truncate with ellipsis

Create lib/validations.ts with Zod schemas:

1. waitlistSchema - email, productType, productSlug, source (optional)
2. contactSchema - name, email, subject (optional), message
3. newsletterSchema - email only

Export TypeScript types inferred from each schema.
```

---

### Phase 2: Core Components (Day 1-2, ~6 hours)

**Prompt 2.1: Build UI Components**
```
Create reusable UI components in components/ui/:

Button.tsx:
- Props: variant (primary, secondary, outline, ghost), size (sm, md, lg), isLoading, disabled
- Variants have different colors and styles
- Loading state shows spinner icon (use lucide-react Loader2)
- Full TypeScript with proper types extending HTMLButtonAttributes

Card.tsx:
- Simple wrapper with border, shadow, rounded corners, padding
- Props: children, hoverable (adds hover lift effect), className
- Use cn() for className merging

Badge.tsx:
- Props: variant (new, comingSoon, featured, popular), children
- Each variant has different background/text colors
- Small rounded pill design

Input.tsx:
- Props: label, error, helperText, and standard input attributes
- Show label above input
- Display error message in red below if provided
- Include proper ARIA attributes for accessibility

Textarea.tsx:
- Similar to Input but for multi-line text
- Auto-resize based on content (optional)
```

**Prompt 2.2: Build Layout Components**
```
Create components/layout/Header.tsx:

Requirements:
- Logo on left (text: "CRE DATA LAB" for now, links to /)
- Navigation links: Home, Courses, Tools, About, Contact
- Responsive: hamburger menu on mobile, full nav on desktop
- Sticky header with blur background on scroll
- Active link highlighting (use usePathname from next/navigation)
- Mobile menu slides in from right with overlay

Create components/layout/Footer.tsx:

4-column grid layout:
- Column 1: Logo, tagline "Data-driven tools for CRE professionals"
- Column 2: Quick links (Home, Courses, Tools, About, Contact)
- Column 3: Resources (Blog, Guides) - link to # for now
- Column 4: Newsletter signup form (just email input + button)
- Bottom row: Copyright © 2024 CRE Data Lab, Privacy, Terms

Create components/layout/MobileMenu.tsx:
- Slide-in overlay menu
- Close button
- Navigation links
- Smooth animations
```

**Prompt 2.3: Build Form Components**
```
Create components/forms/WaitlistForm.tsx:

Props: productType ('course' | 'tool'), productSlug (string), source (optional)

Requirements:
- Email input field
- Submit button (use Button component)
- React Hook Form for form management
- Zod for validation (use waitlistSchema from lib/validations)
- POST to /api/waitlist on submit
- Show loading state during submission
- Show success message on success
- Show error message on error
- Prevent duplicate submissions
- Clear form after success

Create components/forms/ContactForm.tsx:

Fields: name, email, subject (optional), message (textarea)

Requirements:
- Similar implementation to WaitlistForm
- Use contactSchema for validation
- POST to /api/contact
- Success/error handling
- Reset form after successful submission

Create components/forms/NewsletterForm.tsx:

Minimal inline form for footer:
- Email input only
- Subscribe button
- Inline success message
- POST to /api/newsletter (we'll create this)
```

---

### Phase 3: Data & Types (Day 2, ~2 hours)

**Prompt 3.1: Create Type Definitions**
```
Create types/course.ts:

Export interfaces:
- Course (id, slug, title, description, longDescription, price, duration, level, thumbnail, featured, comingSoon, teachableUrl, features[], curriculum[], testimonials[])
- Module (id, title, description, lessons[])
- Lesson (id, title, duration)
- Testimonial (id, name, role, content, avatar?)

Create types/tool.ts:

Export interface:
- Tool (id, slug, title, description, longDescription, pricing, icon, comingSoon, features[], screenshots[]?)

Create types/waitlist.ts:

Export interface:
- WaitlistSignup matching Prisma model
```

**Prompt 3.2: Create Static Data**
```
Create data/courses.ts:

Export courses array with 2 courses:

Course 1:
- slug: 'find-better-deals'
- title: 'Find Better Deals'
- description: 'Learn Python and data analysis for commercial real estate'
- price: 997
- duration: '10 weeks'
- level: 'beginner'
- featured: true
- comingSoon: false
- teachableUrl: process.env.NEXT_PUBLIC_COURSE_URL
- features: ['No coding experience required', 'Live cohort format', 'Build 10 working tools', 'Lifetime access', '30-day guarantee']
- curriculum: 10 modules with basic structure (just titles for now)

Course 2:
- slug: 'advanced-cre-analytics'
- title: 'Advanced CRE Analytics'
- description: 'Machine learning and predictive modeling'
- price: 1497
- comingSoon: true

Also export helper functions:
- getCourseBySlug(slug: string)
- getFeaturedCourses()

Create data/tools.ts:

Export tools array with 3 tools (all comingSoon: true):

Tool 1: Demographics Analyzer - $49/month
Tool 2: Deal Screener - $79/month
Tool 3: Comp Analyzer - $59/month

Each with description, features[], and icon.

Also export:
- getToolBySlug(slug: string)
```

---

### Phase 4: Home Page Components (Day 2, ~4 hours)

**Prompt 4.1: Build Homepage Hero**
```
Create components/home/Hero.tsx:

Full-width section with:
- Gradient background (brand-600 to brand-800)
- Centered white text
- Large heading: "Welcome to CRE Data Lab"
- Subheading: "Data-driven tools and training for commercial real estate professionals"
- Two CTA buttons:
  - Primary: "Explore Courses" (links to /courses)
  - Secondary: "View Tools" (links to /tools)
- Responsive text sizing
- Padding: section class
```

**Prompt 4.2: Build Featured Course Section**
```
Create components/home/FeaturedCourse.tsx:

Requirements:
- Import getCourseBySlug('find-better-deals')
- 2-column layout (image left, content right) on desktop, stack on mobile
- Show course thumbnail (placeholder for now)
- Course title and description
- Key features (bullet list, max 5)
- Price display
- Large CTA button: "Enroll Now - $997" (links to teachableUrl)
- Background: light gray section to stand out
```

**Prompt 4.3: Build Product Grid**
```
Create components/home/ProductGrid.tsx:

Requirements:
- Section title: "What We Offer"
- 2-column grid: Courses | Tools
- Each column shows 2-3 items
- Use Card component for each item
- Courses: Import from courses data, show featured ones
- Tools: Import from tools data, show all
- Each card shows: icon/thumbnail, title, brief description, CTA
- Courses CTA: "Learn More" (links to /courses/[slug])
- Tools CTA: "Join Waitlist" (links to /tools/[slug])
```

**Prompt 4.4: Build About Preview**
```
Create components/home/AboutPreview.tsx:

Requirements:
- Section title: "About CRE Data Lab"
- 2-column layout: photo placeholder left, text right
- Text: 2-3 paragraphs about combining CRE + data science
  - "Built by a commercial real estate broker, appraiser, engineer, and data scientist"
  - Brief origin story
  - Mission statement
- CTA button: "Learn More" (links to /about)
```

**Prompt 4.5: Build CTA Section**
```
Create components/home/CTASection.tsx:

Full-width colored section:
- Background: brand-600
- White text, centered
- Headline: "Ready to Get Started?"
- Subheading: "Join 1,000+ CRE professionals using data to find better deals"
- Large CTA button: "Explore Courses" (links to /courses)
- Padding: section class
```

---

### Phase 5: Pages - Part 1 (Day 2-3, ~4 hours)

**Prompt 5.1: Create Root Layout**
```
Update app/layout.tsx:

Requirements:
- Import Inter font from next/font/google
- Set up metadata (title, description, OpenGraph, Twitter cards)
- Title: "CRE Data Lab - Data-Driven Tools for Commercial Real Estate"
- Description: "Professional training and tools for commercial real estate professionals..."
- Include Header and Footer components
- Wrap children in main tag with flex-grow
- Add Vercel Analytics component
- Proper HTML lang attribute
```

**Prompt 5.2: Build Homepage**
```
Create app/page.tsx:

Import and render in order:
1. Hero
2. FeaturedCourse
3. ProductGrid
4. AboutPreview
5. CTASection

No additional layout needed - just stack components.
Set metadata for homepage (can override default from layout).
```

**Prompt 5.3: Build Courses Listing Page**
```
Create app/courses/page.tsx:

Requirements:
- Page title: "Courses"
- Import all courses from data/courses
- Grid layout (2 columns on desktop, 1 on mobile)
- Render CourseCard component for each course
- Metadata: title "Courses | CRE Data Lab"

Create components/courses/CourseCard.tsx:

Props: course object

Display:
- Thumbnail image (use Next Image, placeholder for now)
- Badge: "Featured" if featured, "Coming Soon" if comingSoon
- Title
- Description (truncate to 150 chars)
- Price (formatPrice)
- Duration and level
- Features list (first 3 only)
- CTA button:
  - If comingSoon: disabled "Coming Soon" button
  - Else: "Learn More" (Link to /courses/[slug])
- Hover effect (lift shadow)
```

**Prompt 5.4: Build Course Detail Page**
```
Create app/courses/[slug]/page.tsx:

Dynamic route:
- Import getCourseBySlug
- Get course from slug param
- If not found, return notFound()
- Generate static params for all courses (for SSG)

Layout:
1. Hero section (course title, description, price, CTA)
2. What You'll Learn (features list)
3. Curriculum (collapsible module list)
4. Testimonials (if available)
5. Instructor bio (placeholder text for now)
6. FAQ section (placeholder)
7. Final CTA (same as hero CTA)

CTAs link to course.teachableUrl (external link)

Metadata: Dynamic title and description based on course
```

---

### Phase 6: Pages - Part 2 (Day 3, ~3 hours)

**Prompt 6.1: Build Tools Listing Page**
```
Create app/tools/page.tsx:

Similar to courses page but for tools:
- Page title: "Tools"
- Grid of tool cards
- All show "Coming Soon" badges
- Metadata

Create components/tools/ToolCard.tsx:

Similar to CourseCard but:
- Shows icon instead of thumbnail
- Pricing string instead of formatted price
- "Join Waitlist" button (Link to /tools/[slug])
- "Coming Soon" badge on all
```

**Prompt 6.2: Build Tool Detail Page**
```
Create app/tools/[slug]/page.tsx:

Dynamic route similar to courses:
- Import getToolBySlug
- Display tool details

Layout:
1. Hero (title, description, "Coming Soon" banner)
2. What It Does (features list)
3. Pricing information
4. Use cases (examples)
5. Screenshots section (placeholders with "Coming Soon")
6. Large waitlist form
7. FAQ

Waitlist form uses WaitlistForm component with:
- productType: 'tool'
- productSlug: tool.slug
- source: 'tool-detail-page'
```

**Prompt 6.3: Build About Page**
```
Create app/about/page.tsx:

Layout:
1. Hero section with photo placeholder
2. "About CRE Data Lab" heading
3. Story section (3-4 paragraphs of placeholder text about combining CRE + data science)
4. "About [Your Name]" heading
5. Bio section with:
   - Professional background (broker, appraiser, engineer, data scientist)
   - Why you built this
   - Credentials
6. Mission/Vision section
7. Contact CTA (link to /contact)

Metadata: "About | CRE Data Lab"
```

**Prompt 6.4: Build Contact Page**
```
Create app/contact/page.tsx:

2-column layout:
- Left: Contact information
  - Email: hello@credatalab.com
  - LinkedIn link
  - "We respond within 24-48 hours"
- Right: ContactForm component

Metadata: "Contact | CRE Data Lab"
```

---

### Phase 7: API Routes (Day 3, ~3 hours)

**Prompt 7.1: Create Waitlist API**
```
Create app/api/waitlist/route.ts:

POST endpoint:
1. Import prisma, waitlistSchema
2. Parse and validate request body with waitlistSchema
3. Check for existing signup (same email + productSlug)
4. If exists, return 409 Conflict
5. Create new waitlist signup in database
6. Send confirmation email (we'll implement email next)
7. Return success response
8. Handle errors:
   - ZodError: 400 with validation errors
   - Unique constraint: 409 Conflict
   - Other: 500 Internal Server Error

Response format:
- Success: { success: true }
- Error: { error: string, details?: any }
```

**Prompt 7.2: Create Contact API**
```
Create app/api/contact/route.ts:

POST endpoint:
1. Import prisma, contactSchema
2. Validate with contactSchema
3. Save to database
4. Send notification email to you
5. Send confirmation email to sender
6. Return success response
7. Error handling similar to waitlist

Response format: Same as waitlist
```

**Prompt 7.3: Create Newsletter API**
```
Create app/api/newsletter/route.ts:

POST endpoint:
1. Import prisma, newsletterSchema
2. Validate email
3. Check if already subscribed
4. If exists and active, return 409
5. If exists and unsubscribed, reactivate
6. Else create new subscriber
7. Send welcome email
8. Return success

Response format: Same as waitlist
```

**Prompt 7.4: Implement Email Functions**
```
Create lib/email.ts:

Use Resend to send emails. Create these functions:

1. sendWaitlistConfirmation(email, productName)
   - Subject: "You're on the waitlist for [productName]"
   - HTML: Thank you message, what to expect, signature

2. sendContactNotification(name, email, message)
   - To: hello@credatalab.com
   - Subject: "New contact form submission from [name]"
   - HTML: Formatted message with sender info

3. sendContactConfirmation(email, name)
   - Subject: "We received your message"
   - HTML: Thank you, will respond within 24-48 hours

4. sendNewsletterWelcome(email)
   - Subject: "Welcome to CRE Data Lab"
   - HTML: Thank you for subscribing, what to expect

All functions should:
- Import Resend with API key from env
- Use RESEND_FROM_EMAIL as sender
- Handle errors gracefully
- Log errors to console
```

---

### Phase 8: Polish & Optimization (Day 4, ~4 hours)

**Prompt 8.1: Add Loading States**
```
Add loading states to all forms:

- WaitlistForm: Disable button and show loading spinner during submission
- ContactForm: Same
- NewsletterForm: Same

Use isLoading state from Button component.

Add React Suspense boundaries:
- Wrap dynamic content with Suspense
- Add loading.tsx files for key routes if needed
```

**Prompt 8.2: Improve Responsiveness**
```
Review and improve mobile responsiveness:

- Header: Ensure mobile menu works smoothly
- Hero: Test text sizes on mobile
- ProductGrid: Ensure proper stacking
- CourseCard/ToolCard: Ensure readable on mobile
- Forms: Test all form inputs on mobile
- Footer: Ensure proper column stacking

Use Tailwind responsive prefixes (sm:, md:, lg:, xl:).
Test at breakpoints: 375px, 768px, 1024px, 1440px.
```

**Prompt 8.3: SEO Optimization**
```
Add proper metadata to all pages:

- Unique titles for each page
- Descriptive meta descriptions
- OpenGraph images (placeholder URLs for now)
- Twitter card metadata
- Canonical URLs

Create public/robots.txt:
- Allow all bots
- Sitemap URL

Add structured data (JSON-LD) to course pages:
- Schema.org Course type
- Include name, description, provider, price
```

**Prompt 8.4: Accessibility Improvements**
```
Ensure accessibility:

- All images have alt text
- Forms have proper labels and ARIA attributes
- Keyboard navigation works (test Tab key)
- Focus states visible
- Color contrast meets WCAG AA standards
- Semantic HTML (proper heading hierarchy)
- Skip to main content link (optional)

Run through with keyboard only - everything should be reachable.
```

**Prompt 8.5: Performance Optimization**
```
Optimize for performance:

- Use Next.js Image component for all images
- Add proper width/height to prevent layout shift
- Lazy load below-the-fold images
- Optimize font loading (already done with next/font)
- Minimize client-side JavaScript
- Use proper caching headers (Vercel handles this)

Check Lighthouse score - aim for:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100
```

---

### Phase 9: Testing (Day 4, ~2 hours)

**Prompt 9.1: Component Testing**
```
Test all components manually:

Create a test checklist and verify:

UI Components:
- [ ] Button renders all variants correctly
- [ ] Card shows hover effect
- [ ] Badge displays all variants
- [ ] Input shows error states
- [ ] Textarea works properly

Layout:
- [ ] Header navigation works
- [ ] Mobile menu opens/closes
- [ ] Footer links work
- [ ] Active link highlighting works

Forms:
- [ ] WaitlistForm validates and submits
- [ ] ContactForm validates and submits
- [ ] NewsletterForm validates and submits
- [ ] Error messages display properly
- [ ] Success messages display properly

Pages:
- [ ] Homepage renders all sections
- [ ] Courses page shows all courses
- [ ] Course detail page works
- [ ] Tools page shows all tools
- [ ] Tool detail page works
- [ ] About page renders
- [ ] Contact page renders
```

**Prompt 9.2: API Testing**
```
Test all API endpoints:

Use a tool like Postman or Thunder Client, or write simple test scripts.

Test cases:

Waitlist API (/api/waitlist):
- [ ] Valid submission creates record
- [ ] Duplicate submission returns 409
- [ ] Invalid email returns 400
- [ ] Missing fields return 400
- [ ] Email is sent (check inbox)

Contact API (/api/contact):
- [ ] Valid submission works
- [ ] Emails are sent (both notification and confirmation)
- [ ] Invalid data returns 400

Newsletter API (/api/newsletter):
- [ ] New subscription works
- [ ] Duplicate subscription returns 409
- [ ] Resubscribe after unsubscribe works

Check database:
- Open Prisma Studio (npx prisma studio)
- Verify records are created
- Check all fields are populated
```

**Prompt 9.3: Integration Testing**
```
Test complete user flows:

Flow 1: Course Discovery to Enrollment
1. Land on homepage
2. Click "Explore Courses"
3. Click course card
4. View course details
5. Click "Enroll Now"
6. Should open Teachable in new/same tab

Flow 2: Tool Waitlist Signup
1. Navigate to Tools page
2. Click tool card
3. View tool details
4. Enter email in waitlist form
5. Submit form
6. See success message
7. Receive confirmation email

Flow 3: Contact Form
1. Go to Contact page
2. Fill out form
3. Submit
4. See success message
5. Receive confirmation email
6. You receive notification email

Test on:
- Chrome desktop
- Safari desktop
- Chrome mobile
- Safari mobile (iOS)
```

---

### Phase 10: Deployment (Day 4, ~1 hour)

**Prompt 10.1: Prepare for Deployment**
```
Pre-deployment checklist:

1. Environment variables:
   - [ ] All env vars are in .env.local
   - [ ] .env.local is in .gitignore
   - [ ] .env.example is up to date

2. Database:
   - [ ] Prisma schema is finalized
   - [ ] Migrations are created (if using)
   - [ ] Can connect to database

3. Build test:
   - [ ] Run 'npm run build' locally
   - [ ] Fix any build errors
   - [ ] No TypeScript errors
   - [ ] No ESLint errors

4. Git:
   - [ ] All changes committed
   - [ ] Pushed to GitHub
   - [ ] Repository is public or accessible to Vercel
```

**Prompt 10.2: Deploy to Vercel**
```
Deployment steps:

1. Connect to Vercel:
   - Go to vercel.com
   - Sign up / login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. Configure project:
   - Framework: Next.js (auto-detected)
   - Root directory: ./
   - Build command: npm run build (default)
   - Output directory: .next (default)

3. Add environment variables:
   - Click "Environment Variables"
   - Add each variable from .env.local
   - DATABASE_URL (we'll get this next)
   - RESEND_API_KEY
   - RESEND_FROM_EMAIL
   - NEXT_PUBLIC_SITE_URL (your production URL)
   - NEXT_PUBLIC_TEACHABLE_SCHOOL_URL
   - NEXT_PUBLIC_COURSE_URL

4. Deploy:
   - Click "Deploy"
   - Wait for build to complete
   - Fix any build errors if they occur
   - Get deployment URL

5. Set up database:
   - In Vercel dashboard, go to Storage tab
   - Create → Postgres
   - Name: credatalab-db
   - Region: Choose closest to your users
   - Connect to project
   - Copy DATABASE_URL
   - Add to environment variables
   - Redeploy

6. Run migrations:
   - In local terminal: npx prisma db push --accept-data-loss
   - Or wait for next deployment (runs automatically)

7. Test production:
   - Visit deployment URL
   - Test all pages
   - Test all forms
   - Check emails are sending
```

**Prompt 10.3: Connect Custom Domain**
```
Connect credatalab.com:

1. In Vercel:
   - Go to project Settings → Domains
   - Add domain: credatalab.com
   - Add domain: www.credatalab.com
   - Vercel shows DNS records needed

2. In Namecheap:
   - Go to Domain List → credatalab.com → Advanced DNS
   - Add A record:
     - Host: @
     - Value: 76.76.21.21 (Vercel IP)
     - TTL: Automatic
   - Add CNAME record:
     - Host: www
     - Value: cname.vercel-dns.com
     - TTL: Automatic

3. Wait for DNS propagation (1-24 hours)
   - Check status in Vercel dashboard
   - Once verified, SSL is automatically added

4. Set up redirects (Vercel handles this automatically):
   - www.credatalab.com → credatalab.com
   - http → https

5. Update environment variables:
   - Change NEXT_PUBLIC_SITE_URL to https://credatalab.com
   - Redeploy if needed

6. Final test:
   - Visit credatalab.com
   - Ensure SSL works (https://)
   - Test all functionality
```

---

## Priority Build Order Summary

### Day 1 (Setup & Core - 8 hours)
1. ✅ Project initialization and configuration (2h)
2. ✅ Database setup with Prisma (1h)
3. ✅ UI components (Button, Card, Badge, Input, Textarea) (2h)
4. ✅ Layout components (Header, Footer, MobileMenu) (3h)

### Day 2 (Pages & Content - 8 hours)
1. ✅ Type definitions and static data (2h)
2. ✅ Homepage components (Hero, FeaturedCourse, ProductGrid, CTA) (3h)
3. ✅ Courses page and detail pages (2h)
4. ✅ Tools page and detail pages (1h)

### Day 3 (Forms & API - 7 hours)
1. ✅ Form components (WaitlistForm, ContactForm, NewsletterForm) (2h)
2. ✅ API routes (waitlist, contact, newsletter) (2h)
3. ✅ Email integration with Resend (1h)
4. ✅ About and Contact pages (2h)

### Day 4 (Polish & Deploy - 7 hours)
1. ✅ Loading states and error handling (1h)
2. ✅ Responsive design refinements (1h)
3. ✅ SEO optimization (1h)
4. ✅ Accessibility improvements (1h)
5. ✅ Testing (all flows) (2h)
6. ✅ Deployment to Vercel (1h)

**Total: ~30 hours of development time**

---

## Success Criteria

The project is complete when:

### Functionality
- [ ] All pages load without errors
- [ ] Navigation works (desktop and mobile)
- [ ] All forms submit successfully
- [ ] Emails are received
- [ ] Database records are created
- [ ] External links (to Teachable) work
- [ ] Images load properly

### Design
- [ ] Matches brand (blue color scheme)
- [ ] Professional appearance
- [ ] Mobile responsive at all breakpoints
- [ ] Consistent spacing and typography
- [ ] Smooth transitions and hover effects

### Performance
- [ ] Lighthouse score 90+ on all metrics
- [ ] Fast initial load (< 3 seconds)
- [ ] Images optimized
- [ ] No console errors

### SEO
- [ ] All pages have metadata
- [ ] Semantic HTML
- [ ] robots.txt in place
- [ ] Proper heading hierarchy

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast
- [ ] Form labels and ARIA attributes

---

## Common Issues & Solutions

### Issue: Prisma client not generating
**Solution:** Run `npx prisma generate` manually

### Issue: Environment variables not working
**Solution:** Make sure to restart dev server after adding to .env.local

### Issue: Forms not submitting
**Solution:** Check browser console for errors, verify API route is correct

### Issue: Images not loading
**Solution:** Ensure images are in public/ directory and paths start with /

### Issue: Build fails on Vercel
**Solution:** Check build logs, usually TypeScript or missing env vars

### Issue: Database connection fails
**Solution:** Verify DATABASE_URL is correct, check Vercel Postgres is connected

### Issue: Emails not sending
**Solution:** Verify RESEND_API_KEY is correct, check Resend dashboard for errors

---

## Post-Launch Tasks

After successful deployment:

1. **Test everything in production**
   - All pages
   - All forms
   - Email delivery
   - Mobile devices

2. **Set up monitoring**
   - Vercel Analytics (automatic)
   - Error tracking (Sentry optional)
   - Uptime monitoring (optional)

3. **Create content**
   - Add real images (logo, course thumbnails)
   - Write actual copy for About page
   - Add real testimonials when available

4. **SEO**
   - Submit sitemap to Google Search Console
   - Set up Google Analytics (optional)
   - Add OpenGraph images

5. **Marketing**
   - Share on LinkedIn
   - Email network
   - Post on relevant forums
   - Add to directory sites

---

## Future Enhancements (Phase 2)

Not needed for initial launch but plan for:

1. **Blog functionality**
   - Add /blog directory
   - MDX support for rich content
   - Author system

2. **Admin dashboard**
   - View waitlist signups
   - Respond to contacts
   - Analytics

3. **Authentication**
   - User accounts (NextAuth.js)
   - When building actual SaaS tools

4. **Payment processing**
   - Stripe integration
   - When building tools

5. **Advanced analytics**
   - Custom event tracking
   - Conversion funnels
   - A/B testing

---

## Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev
- Resend: https://resend.com/docs
- Vercel: https://vercel.com/docs

### Design Inspiration
- https://tailwindui.com (patterns)
- https://www.framer.com (templates)
- https://dribbble.com (inspiration)

### Tools
- Prisma Studio: `npx prisma studio`
- Vercel CLI: `npm i -g vercel`
- Thunder Client (VS Code extension for API testing)

---

## Notes for Claude Code

- Prioritize functionality over perfection
- Use placeholder content where real content isn't available
- Follow Next.js 14 App Router conventions
- Use TypeScript strictly
- Follow Tailwind best practices
- Keep components small and focused
- Handle errors gracefully
- Make it mobile-first
- Comment complex logic
- Use semantic HTML

**Goal: Ship a working, professional site in 3-4 days.**

---

**Ready to build! Follow the prompts in order for best results.**