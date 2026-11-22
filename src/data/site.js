// Set real values in .env (see .env.example). Empty values are hidden on the site.
export const site = {
  name: 'Phantom.exe',
  tagline: 'Building Ideas. Engineering Solutions.',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  github: import.meta.env.VITE_GITHUB_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const services = [
  { title: 'Websites & web apps', desc: 'Fast, responsive business sites and full-stack web applications.' },
  { title: 'Business software', desc: 'Dashboards, inventory and point-of-sale tools that fit how a business works.' },
  { title: 'AI integrations', desc: 'Practical AI features, such as support assistants, added to existing products.' },
  { title: 'Automation', desc: 'Small tools that remove repetitive manual work from daily workflows.' },
]

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['Supabase', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'Figma'],
}
