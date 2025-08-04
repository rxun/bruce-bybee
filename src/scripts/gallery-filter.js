import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

function initializeGalleryFilters() {
  // Filter buttons should already be moved by gallery page script
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const photoItems = document.querySelectorAll('.photo-item');
  
  // Set initial active state
  filterBtns[0]?.classList.add('bg-gray-900', 'text-white');
  
  // Main filtering function with FLIP animation
  function filterItems(category) {
    const state = Flip.getState(photoItems); // Save current state for animation
    
    // Toggle visibility based on filter
    photoItems.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      const match = category === 'all' || itemCategory === category;
      
      item.style.display = match ? 'block' : 'none'; // Show matching items, hide others
    });
    
    // Animate with Flip - using the same settings as the reference
    Flip.from(state, {
      duration: 0.4,
      scale: true,
      ease: "power1.inOut",
      stagger: 0.08,
      absolute: true, // This is the key for smooth morphing!
      onEnter: (elements) =>
        gsap.from(elements, { opacity: 0, scale: 0, duration: 0.4 }),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, scale: 0, duration: 0.4 }),
    });
  }
  
  // Filter Event Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior
      
      const category = this.getAttribute('data-category');
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Update active button styles
      filterBtns.forEach(b => {
        b.classList.remove('bg-gray-900', 'text-white', 'hover:bg-gray-800');
        b.classList.add('hover:bg-gray-100');
      });
      this.classList.add('bg-gray-900', 'text-white', 'hover:bg-gray-800');
      this.classList.remove('hover:bg-gray-100');
      
      // Run the filter animation
      filterItems(category);
    });
  });
  
  // Initialize with "all" filter
  filterItems('all');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGalleryFilters);
} else {
  initializeGalleryFilters();
}