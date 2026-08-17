export interface NavItem {
  label: string;
  href: string;
}

export interface Priest {
  id: string;
  name: string;
  photo: string;
  rating: number;
  ratingLabel: string;
  reviewCount: number;
  experience: string;
  speciality: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  event: string;
  location: string;
  availability: string;
  description: string;
}

export interface Festival {
  id: string;
  title: string;
  image: string;
  subtitle: string;
}

export interface Testimonial {
  id: string;
  photo: string;
  author: string;
  quote: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  imageAlt: string;
}

export interface BlogPostBody {
  type: "p" | "h2" | "h3" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost extends BlogPostSummary {
  lang: "bn" | "en";
  breadcrumbLabel: string;
  body: BlogPostBody[];
}

export interface BookingFormOptions {
  pujaTypes: string[];
  timeSlots: string[];
  locations: string[];
}
