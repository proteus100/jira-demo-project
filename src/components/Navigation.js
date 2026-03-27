// Navigation Component
// SCRUM-7: Fixed navigation menu alignment issue on mobile devices

/**
 * Navigation menu component
 * Bug fix: Corrected mobile menu alignment that was causing layout issues
 */

class Navigation {
  constructor() {
    this.menuOpen = false;
    this.mobileBreakpoint = 768;
  }

  /**
   * Toggle mobile menu
   * Fix: Added proper z-index and position handling
   */
  toggleMobileMenu() {
    this.menuOpen = !this.menuOpen;
    const menu = document.getElementById('mobile-menu');

    if (menu) {
      // Bug fix: Added proper CSS classes for alignment
      if (this.menuOpen) {
        menu.classList.add('menu-open');
        menu.style.position = 'fixed';  // Fix: Changed from absolute to fixed
        menu.style.top = '60px';        // Fix: Aligned with header height
        menu.style.right = '0';         // Fix: Proper right alignment
        menu.style.zIndex = '1000';     // Fix: Ensure menu appears above content
      } else {
        menu.classList.remove('menu-open');
      }
    }
  }

  /**
   * Check if viewport is mobile
   * @returns {boolean}
   */
  isMobile() {
    return window.innerWidth < this.mobileBreakpoint;
  }

  /**
   * Initialize navigation
   * Fix: Added resize event listener to handle orientation changes
   */
  init() {
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-toggle');
    if (menuButton) {
      menuButton.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Bug fix: Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (!this.isMobile() && this.menuOpen) {
        this.toggleMobileMenu();
      }
    });

    // Bug fix: Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-toggle');

      if (this.menuOpen &&
          menu &&
          !menu.contains(event.target) &&
          !menuButton.contains(event.target)) {
        this.toggleMobileMenu();
      }
    });
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
