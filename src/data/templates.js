// Template images
import fresherTemplate from '../assets/fresher-template.jpg';
import professionalTemplate from '../assets/professional-template.jpg';
import mbaTemplate from '../assets/mba-template.jpg';
import designerTemplate from '../assets/designer-template.jpg';
import developerTemplate from '../assets/developer-template.jpg';
import creativeTemplate from '../assets/creative-template.jpg';

export const templates = [
  {
    id: 'fresher',
    name: 'Fresher Resume',
    image: fresherTemplate,
    category: 'fresher',
    categoryName: 'Fresher',
    rating: 4.8,
    description: 'Perfect for students and recent graduates with minimal work experience.',
    color: '#4a6cf7',
    font: 'Poppins',
    sections: ['personal', 'education', 'skills', 'projects', 'achievements', 'languages']
  },
  {
    id: 'professional',
    name: 'Professional Resume',
    image: professionalTemplate,
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.9,
    description: 'A classic professional resume template suitable for most industries.',
    color: '#343a40',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'languages']
  },
  {
    id: 'mba',
    name: 'MBA Resume',
    image: mbaTemplate,
    category: 'mba',
    categoryName: 'MBA',
    rating: 4.7,
    description: 'Designed for business professionals and MBA graduates.',
    color: '#28a745',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'achievements', 'certifications']
  },
  {
    id: 'designer',
    name: 'Designer Resume',
    image: designerTemplate,
    category: 'designer',
    categoryName: 'Designer',
    rating: 4.8,
    description: 'Creative template for designers, artists, and creative professionals.',
    color: '#ff6b6b',
    font: 'Poppins',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'languages']
  },
  {
    id: 'developer',
    name: 'Developer Resume',
    image: developerTemplate,
    category: 'developer',
    categoryName: 'Developer',
    rating: 4.9,
    description: 'Technical resume template for software developers and engineers.',
    color: '#6c757d',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  {
    id: 'creative',
    name: 'Creative Resume',
    image: creativeTemplate,
    category: 'designer',
    categoryName: 'Designer',
    rating: 4.6,
    description: 'A unique and creative resume template to stand out from the crowd.',
    color: '#fd7e14',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'portfolio', 'interests']
  }
];

// Resume sections data
export const resumeSections = {
  personal: {
    id: 'personal',
    title: 'Personal Information',
    icon: 'user',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'tel', required: true },
      { id: 'address', label: 'Address', type: 'text', required: false },
      { id: 'website', label: 'Website', type: 'url', required: false },
      { id: 'linkedin', label: 'LinkedIn', type: 'url', required: false },
      { id: 'github', label: 'GitHub', type: 'url', required: false },
      { id: 'summary', label: 'Professional Summary', type: 'textarea', required: false }
    ]
  },
  experience: {
    id: 'experience',
    title: 'Work Experience',
    icon: 'briefcase',
    multiple: true,
    fields: [
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'company', label: 'Company', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Current Job', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: 'graduation-cap',
    multiple: true,
    fields: [
      { id: 'degree', label: 'Degree', type: 'text', required: true },
      { id: 'institution', label: 'Institution', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Currently Studying', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: 'tools',
    fields: [
      { id: 'skillList', label: 'Skills', type: 'tags', required: true },
      { id: 'showLevel', label: 'Show Skill Level', type: 'checkbox', required: false }
    ]
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: 'project-diagram',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: false },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  certifications: {
    id: 'certifications',
    title: 'Certifications',
    icon: 'certificate',
    multiple: true,
    fields: [
      { id: 'title', label: 'Certification Name', type: 'text', required: true },
      { id: 'issuer', label: 'Issuing Organization', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'link', label: 'Certificate Link', type: 'url', required: false }
    ]
  },
  achievements: {
    id: 'achievements',
    title: 'Achievements',
    icon: 'trophy',
    multiple: true,
    fields: [
      { id: 'title', label: 'Achievement Title', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  languages: {
    id: 'languages',
    title: 'Languages',
    icon: 'language',
    multiple: true,
    fields: [
      { id: 'language', label: 'Language', type: 'text', required: true },
      { id: 'proficiency', label: 'Proficiency', type: 'select', required: true, options: [
        { value: 'native', label: 'Native' },
        { value: 'fluent', label: 'Fluent' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'basic', label: 'Basic' }
      ]}
    ]
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfolio',
    icon: 'images',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'category', label: 'Category', type: 'text', required: false },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  interests: {
    id: 'interests',
    title: 'Interests',
    icon: 'heart',
    fields: [
      { id: 'interestList', label: 'Interests', type: 'tags', required: true }
    ]
  }
};
