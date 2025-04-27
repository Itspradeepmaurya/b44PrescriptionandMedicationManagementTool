// Helper function to conditionally join class names
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  // Format date helper
  export function formatDate(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }