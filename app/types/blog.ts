export interface BlogPost {
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  categories: string[];
  published: boolean;
  path: string;
}
