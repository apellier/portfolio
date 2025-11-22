export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  size: 'small' | 'medium' | 'large';
  link?: string;
}

export interface MethodologyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
