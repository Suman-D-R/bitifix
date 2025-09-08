/**
 * Utility functions for smooth scrolling behavior
 */

/**
 * Smoothly scrolls to a specific element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 80px for header)
 */
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Smoothly scrolls to a specific section on a different page
 * @param path - The path to navigate to
 * @param sectionId - The ID of the section to scroll to
 */
export const navigateToSection = (path: string, sectionId: string) => {
  // Navigate to the page first
  window.location.href = `${path}#${sectionId}`;
};

/**
 * Handles smooth scrolling when the page loads with a hash in the URL
 */
export const handleHashScroll = () => {
  const hash = window.location.hash;
  if (hash) {
    // Remove the # from the hash
    const elementId = hash.substring(1);
    
    // Wait for the page to load, then scroll to the element
    setTimeout(() => {
      scrollToElement(elementId);
    }, 100);
  }
};
