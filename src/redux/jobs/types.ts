export type _idJob = number;

export interface _JobsAPIParams {
  page: number;
  descending?: boolean;
  company?: string;
  category?: string;
  level?: string;
  location?: string;
}

export interface _JobsAPIResponse {
  page: number;
  page_count: number;
  items_per_page: number;
  took: number;
  timed_out: boolean;
  total: number;
  results: _Job[];
}

export interface _Job {
  id: _idJob;
  name: string;
  company: {id: number; short_name: string; name: string};
  contents: string;
  levels: {name: string; short_name: string}[];
  locations: {name: string}[];
  publication_date: string;
  type: string;
  short_name: string;
  model_type: string;
  categories: {name: string}[];
  tags: string[];
  refs: {landing_page: string};
}

export interface _Jobs {
  items: _Job[];
  favorites: _Job[];
  applications: _Job[];
  isLoading: boolean;
  error: any;
  jobDetail: _Job | null;
}

// interface JobsState extends Array<_Job> {}

export const job_category = [
  'Accounting',
  'Accounting and Finance',
  'Account Management',
  'Account Management/Customer Success',
  'Administration and Office',
  'Advertising and Marketing',
  'Animal Care',
  'Arts',
  'Business Operations',
  'Cleaning and Facilities',
  'Computer and IT',
  'Construction',
  'Corporate',
  'Customer Service',
  'Data and Analytics',
  'Data Science',
  'Design',
  'Design and UX',
  'Editor',
  'Education',
  'Energy Generation and Mining',
  'Entertainment and Travel Services',
  'Farming and Outdoors',
  'Food and Hospitality Services',
  'Healthcare',
  'HR',
  'Human Resources and Recruitment',
  'Installation, Maintenance, and Repairs',
  'IT',
  'Law',
  'Legal Services',
  'Management',
  'Manufacturing and Warehouse',
  'Marketing',
  'Mechanic',
  'Media, PR, and Communications',
  'Mental Health',
  'Nurses',
  'Office Administration',
  'Personal Care and Services',
  'Physical Assistant',
  'Product',
  'Product Management',
  'Project Management',
  'Protective Services',
  'Public Relations',
  'Real Estate',
  'Recruiting',
  'Retail',
  'Sales',
  'Science and Engineering',
  'Social Services',
  'Software Engineer',
  'Software Engineering',
  'Sports, Fitness, and Recreation',
  'Transportation and Logistics',
  'Unknown',
  'UX',
  'Videography',
  'Writer',
  'Writing and Editing',
];

export const job_level = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'management',
  'Internship',
];
