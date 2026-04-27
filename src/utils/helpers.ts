/**
 * Utility functions para o portfolio
 */

export interface SEOMetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

/**
 * Gera meta tags para SEO
 */
export function generateSEOMetaTags(seo: SEOMetaTags) {
  return {
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogImage: seo.image,
    ogUrl: seo.url,
    twitterCard: "summary_large_image",
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: seo.image,
  };
}

/**
 * Formata uma data em formato legível
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Verifica se é um email válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Scroll para seção específica
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
