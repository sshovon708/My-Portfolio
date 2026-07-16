// Generate SEO-friendly slugs from titles
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Generate unique slug with fallback for duplicates
export function generateUniqueSlug(title, existingSlugs = []) {
  let slug = generateSlug(title);
  let counter = 1;
  
  // If slug already exists, append a number
  while (existingSlugs.includes(slug)) {
    slug = `${generateSlug(title)}-${counter}`;
    counter++;
  }
  
  return slug;
}