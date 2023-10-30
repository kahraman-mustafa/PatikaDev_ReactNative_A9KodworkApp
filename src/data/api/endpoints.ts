interface APIParamsJobs {
  page: number;
  descending?: boolean;
  company?: string;
  category?: string;
  level?: string;
  location?: string;
}

interface APIParamsCompaines {
  page: number;
  descending: boolean;
  industry: string;
  size: string;
  location: string;
}

interface APIParamsCoaches {
  page: number;
  descending: boolean;
  offering: string;
  level: string;
  specialization: string;
}

interface JobResult {
  contents: string;
  name: string;
  type: string;
  publication_date: string;
  short_name: string;
  model_type: string;
  id: number;
  locations: {name: string}[];
  categories: {name: string}[];
  levels: {name: string; short_name: string}[];
  tags: string[];
  refs: {landing_page: string};
  company: {id: number; short_name: string; name: string};
}

const API_URL_JOBS = 'https://www.themuse.com/api/public/jobs';
const API_URL_JOB_BY_ID = id => API_URL_JOBS + '/' + id;

const API_URL_COMPANIES = 'https://www.themuse.com/api/public/companies';
const API_URL_COMPANY_BY_ID = id => API_URL_COMPANIES + '/' + id;

const API_URL_COACHES = 'https://www.themuse.com/api/public/coaches';
const API_URL_COACH_BY_ID = id => API_URL_COACHES + '/' + id;

const job_category = [
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

const job_level = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'management',
  'Internship',
];

const company_industry = [
  'Accounting',
  'Advertising and Agencies',
  'Architecture',
  'Arts & Music',
  'Biotechnology',
  'Blockchain',
  'Client Services',
  'Consulting',
  'Consumer Goods & Services',
  'Data Science',
  'Education',
  'Energy',
  'Engineering',
  'Entertainment & Gaming',
  'Fashion & Beauty',
  'Financial Services',
  'Fintech',
  'Fitness & Wellness',
  'Food & Beverage',
  'Government',
  'Healthcare',
  'Healthtech',
  'Information Technology',
  'Insurance',
  'Law',
  'Manufacturing',
  'Marketing',
  'Media',
  'Mortgage',
  'Non-Profit',
  'Pharmaceutical',
  'Public Relations & Communications',
  'Real Estate & Construction',
  'Retail',
  'Social Good',
  'Social Media',
  'Software',
  'Technology',
  'Telecom',
  'Trading',
  'Travel and Hospitality',
  'Veterinary',
];

const company_size = ['Small Size', 'Medium Size', 'Large Size'];

const coach_offering = [
  '30-Minute Career Q&A',
  'Cover Letter Writing',
  'Interview Coaching',
  'Job Search Strategy',
  'Leadership Coaching',
  'Negotiation Coaching',
  'Networking Strategy',
  '"New Manager" Program',
  'Resume + LinkedIn Review',
  'Resume Review',
  '“Stuck in a Career Rut” Package',
  '"Ultimate Job Search" Kit',
];

const coach_level = ['Mentor', 'Coach', 'Master Coach'];

const coach_specialization = [
  'Account Management',
  'Advertisement and Agencies',
  'Architecture',
  'Beauty',
  'Bilingual',
  'Biotechnology',
  'Career Changers',
  'Client services',
  'College/New Grads',
  'Confidence Coaching',
  'Consulting',
  'Creative/Music/Arts',
  'Data Science',
  'Design',
  'Digital Marketing',
  'Education',
  'Engineering',
  'Entertainment & Gaming',
  'Entrepreneurs',
  'ESL',
  'Executives',
  'Fashion',
  'Finance',
  'Fitness/Health',
  'Fitness/ Health',
  'Government',
  'Graphic Design',
  'Healthcare',
  'Hospitality',
  'Human Resources/Recruiting',
  'Insurance',
  'International Job Seekers',
  'Law',
  'Manufacturing',
  'Marketing',
  'Media',
  'Mid Career',
  'New Managers',
  'Non-Profit',
  'Public Relations',
  'Real Estate & Construction',
  'Relocating',
  'Remote Job Seekers',
  'Returning To Workforce',
  'Sales',
  'Start Ups',
  'Tech',
  'Veterans',
  'Visa/Sponsorship',
  'Women',
];

const sampleJobResult = {
  contents:
    '<p><strong>Art der Anstellung:</strong> Unbefristet; Vollzeit<br>  <br><strong>Wissen für die Welt von morgen.</strong><br><br>Wir entwickeln Netzwerke, die unsere Städte schlauer mit Licht und Wärme versorgen und kennen uns in Sachen Automatisierung und Digitalisierung in der Prozess- und Fertigungsindustrie bestens aus. Für Projekte in der Zukunft und viele weitere brauchen wir kluge Köpfe, die ihr Talent und ihre Kreativität einbringen. Menschen wie dich! Hilf uns dabei, die spannendsten Aufgaben gemeinsam anzugehen und umzusetzen, worauf es ankommt. Was wir dir bieten ist die Chance, wirklich etwas zu bewegen. Also worauf warten? Mache mit uns den nächsten Schritt in deiner Karriere.<br><br><strong>Verändere mit uns die Welt von morgen.</strong><br><br>Wir suchen<strong> mehrere Elektrofachkräfte </strong>in einem zukunftsorientierten Aufgabenfeld!<br><br><ul><li>Du bist zuständig für den mechanischen und elektrischen Aufbau von Industrieschaltschränken gemäß Schaltplänen, Zeichnungen und Stücklisten entsprechend unserer Fertigungsrichtlinien </li><li>Zu deinen Aufgaben gehört zudem die elektrische Prüfung (Sicht-, Apparate- und Leitungskontrolle) sowie die Funktionsprüfung </li><li>Du behältst deine Arbeitsabläufe im Blick und gibst deinen Beitrag zur Verbesserung der Dokumentation</li><li>Auftretende Fragen klärst du eigenverantwortlich mit den zuständigen Teamleiter<em>innen und den Kolleg</em>innen der technischen Abteilungen</li></ul><br><strong>Was du können solltest. Damit die Welt mehr kann.</strong><br><br>Deine Qualifikationen - fundiert und adäquat.<br><br><ul><li>Du verfügst über eine erfolgreich abgeschlossene Berufsausbildung als <strong>Elektriker<em>in, Elektroniker</em>in, Mechatroniker*in </strong>oder eine vergleichbare Qualifikation</li><li>Idealerweise konntest du bereits erste Berufserfahrung in der Fertigung im Anlagenbau sammeln</li><li>Umfangreiche Schaltpläne und Montagezeichnungen schrecken dich nicht ab</li><li>Die Begriffe "Kontinuierlicher Verbesserungsprozess" sowie "7S" für Ordnung und Struktur am Arbeitsplatz sind dir nicht fremd</li><li>Fundierte Anwenderkenntnisse im Umgang mit MS-Office bringst du mit, Grundkenntnisse in SAP sind von Vorteil</li><li>Du verfügst über gute Deutschkenntnisse in Wort und Schrift</li><li>Du bringst die Bereitschaft mit, im Schichtbetrieb zu arbeiten</li><li>Teamfähigkeit, Kundenorientierung sowie Qualitätsbewusstsein runden dein Profil ab</li></ul><br><strong>Was wir bieten.</strong><br><br><ul><li>Ansprechendes Vergütungspaket</li><li>Weiterbildungsmöglichkeiten sowohl für deine berufliche als auch persönliche Entwicklung</li><li>30 Tage Urlaub und ein persönliches Gleitzeitkonto</li><li>Zugang zu Aktienplänen für Mitarbeitende</li><li>Und viele weitere Benefits hier</li></ul><br><strong>Dein kleiner Schritt in Richtung großartiger Siemens-Welt.</strong><br><br><strong>www.siemens.de</strong><br><br>wenn du vor deiner Bewerbung mehr über Siemens erfahren möchtest.<br><br>Du hast Fragen zur Bewerbung? <strong>Hier</strong> findest du Antworten auf häufig gestellte Fragen.<br><br>Wenn du darüber hinaus noch Fragen hast, wende dich gerne an uns: www.siemens.de/fragenzurbewerbung<br><br><strong>www.siemens.de/karriere</strong><br><br>wenn du mehr Informationen zu Jobs &amp; Karriere bei Siemens erhalten möchtest.<br><br>Wir legen Wert auf Chancengleichheit und freuen uns über Bewerbungen von Menschen mit Behinderung.<br><br><b>Organization:</b> Digital Industries<br><br><b>Company:</b> Siemens AG<br><br><b>Experience Level:</b> Early Professional<br><br><b>Full / Part time:</b> Full-time</p>',
  name: 'Elektrofachkräfte (w/m/d) im Schaltschrankbau',
  type: 'external',
  publication_date: '2023-03-08T23:47:31Z',
  short_name: 'elektrofachkrafte-wmd-im-schaltschrankbau',
  model_type: 'jobs',
  id: 10976639,
  locations: [
    {
      name: 'Nürnberg, Germany',
    },
  ],
  categories: [
    {
      name: 'Software Engineering',
    },
  ],
  levels: [
    {
      name: 'Mid Level',
      short_name: 'mid',
    },
  ],
  tags: [],
  refs: {
    landing_page:
      'https://www.themuse.com/jobs/siemens/elektrofachkrafte-wmd-im-schaltschrankbau',
  },
  company: {
    id: 11913,
    short_name: 'siemens',
    name: 'Siemens',
  },
};
