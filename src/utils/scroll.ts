export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 100; // Account for banner height
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}