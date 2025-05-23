export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  link?: string;
}

export interface PracticeArea {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
} 