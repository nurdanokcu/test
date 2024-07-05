export const decidePostTheme = (category: string) => {
  switch (category) {
    case 'Web Development':
    case 'Mobile Development':
    case 'Data Science':
    case 'Artificial Intelligence':
    case 'Technology':
    case 'Webentwicklung':
    case 'Mobile Entwicklung':
    case 'Datenwissenschaft':
    case 'Künstliche Intelligenz':
    case 'Technologie':
      return 'var(--primary-orange)';
    case 'Digital Marketing':
    case 'Business':
    case 'SMM':
    case 'Digitales Marketing':
    case 'Geschäft':
      return 'var(--primary-blue)';
    case 'UI/UX Design':
    case 'Design':
      return 'var(--primary-magenta)';
    default:
      return 'gradient';
  }
};
