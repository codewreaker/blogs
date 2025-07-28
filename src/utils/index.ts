import type { BlogPost } from '../../types';
// Utility Functions
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const getExcerpt = (toc: BlogPost['toc']) => {
  if (toc && toc.length > 0) {
    // Find the first paragraph after the first heading
    const firstContent = toc.find(item => item.depth === 2);
    return firstContent ? firstContent.text : 'Read more...';
  }
  return 'Read more...';
};


export const getCategory = (frontmatter: BlogPost['frontmatter']) => {
  return frontmatter.category || 'Blog';
}