export interface CoffeeVariety {
  id: string;
  name: string;
  description: string;
  aroma: string;
  acidity: string;
  body: string;
  notes: string[];
  characteristic: string;
  image?: string;
}

export interface MarketSegment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  description: string;
  category: 'women' | 'environment' | 'community';
}

export interface Inquiry {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  varietyId: string;
  quantity: number;
  unit: 'bags' | 'tons' | 'containers';
  beanType: 'green' | 'roasted';
  message: string;
  createdAt: string;
  status: 'Received' | 'In Progress' | 'Completed';
}
