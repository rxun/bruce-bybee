import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

function initializeGalleryFilters() {
  // Wait a bit for Muuri to be ready
  setTimeout(() => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');
    
    console.log('Initializing filters...');
    console.log('Filter buttons found:', filterBtns.length);
    console.log('Photo items found:', photoItems.length);
    console.log('Muuri instance available:', !!window.muuriInstance);
    
    // Set initial active state
    filterBtns[0]?.classList.add('bg-gray-900', 'text-white');
    
    // Main filtering function with Muuri
    function filterItems(category) {
    const muuriInstance = window.muuriInstance;
    if (!muuriInstance) {
      console.log('Muuri not available, using fallback filtering');
      // Fallback to simple show/hide
      photoItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        const match = category === 'all' || itemCategory === category;
        item.style.display = match ? 'block' : 'none';
      });
      return;
    }
    
    console.log('Filtering with Muuri for category:', category);
    
    // Get all items and filter them
    const allItems = muuriInstance.getItems();
    const filteredItems = allItems.filter(item => {
      const itemCategory = item.getElement().getAttribute('data-category');
      const match = category === 'all' || itemCategory === category;
      console.log(`Item ${itemCategory} matches ${category}:`, match);
      return match;
    });
    
    console.log('Filtered items count:', filteredItems.length);
    
    // Show filtered items with animation
    muuriInstance.filter(function(item) {
      const itemCategory = item.getElement().getAttribute('data-category');
      return category === 'all' || itemCategory === category;
    }, {
      duration: 400,
      easing: 'ease-in-out'
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
  }, 1000); // Wait 1 second for Muuri to be ready
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGalleryFilters);
} else {
  initializeGalleryFilters();
}