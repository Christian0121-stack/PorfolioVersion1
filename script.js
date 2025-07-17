// Project data with detailed information
// TO ADD A NEW PROJECT: Just add a new entry here with the required fields
// 
// Required fields:
// - title: Project name
// - category: 'web', 'desktop', 'mobile', 'computer-vision', 'augmented-reality', 'virtual-reality'
// - video: YouTube embed URL or null
// - pictures: Image URL or null (will use default category image if null)
// - description: Short description for project card
// - fullDescription: Detailed description for modal
// - purpose: What the project aims to achieve
// - problem: What problem it solves
// - solution: How you solved the problem
// - technologies: Array of technology names
//
// Example:
// 'your-project-key': {
//   title: 'Your Project Name',
//   category: 'web',
//   video: 'https://www.youtube.com/embed/VIDEO_ID',
//   pictures: 'https://your-image-url.com/image.jpg',
//   description: 'Short description of your project',
//   fullDescription: 'Detailed description explaining what the project does...',
//   purpose: 'What the project aims to achieve',
//   problem: 'What problem this project solves',
//   solution: 'How you implemented the solution',
//   technologies: ['React', 'Node.js', 'MongoDB']
// },

const projectData = {
    'web-BLHDocumentManagementSystem': {
    title: 'BLH Document Management System',
    category: 'web',
    video: 'https://www.youtube.com/embed/Xi_vnhl-MWs?si=_Qrer-anQ7Zgm4qw',
    pictures: 'PROJECT IMAGE/W-BLHDocumentManagementSystem.jpg',
    description: 'An internal web-based system for digitizing office documents and reducing paper clutter.',
    fullDescription: 'I independently designed and developed a full-featured, responsive website for our department at Balanga City Hall as a personal initiative to improve digital services and streamline internal file management. Although not part of my job contract, I created the entire system from scratch — handling both front-end and back-end development. The platform allows staff to upload and organize digital files, helping eliminate paper-based clutter and improve office efficiency.',
    purpose: 'To digitize physical documents and provide a cleaner, more efficient way to manage office files internally.S',
    problem: 'The office was overwhelmed with piles of paperwork.',
    solution: 'A secure, easy-to-use web system that enables staff to upload, store, and manage documents digitally—supporting a more organized and paperless workflow.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL', 'BARCODE SCANNER', 'QR CODE']
  },


    'web-MAPS': {
    title: 'BLH MAPS',
    category: 'web',
    video: 'https://www.youtube.com/embed/Xi_vnhl-MWs?si=_Qrer-anQ7Zgm4qw',
    pictures: 'PROJECT IMAGE/W-BLHMAPS.jpg',
    description: 'A custom-built navigation system that guides users from their current location (Point A) to the nearest Barangay Learning Hub (Point B).',
    fullDescription: 'I developed BLH Maps as part of my personal initiative to make the Barangay Learning Hubs more accessible to the public. This web-based mapping tool helps users easily locate the nearest BLH site by providing real-time directions from their current position to the destination. The system improves accessibility and reduces confusion, especially for new users unfamiliar with the area. The app was tailored specifically for the needs of Balanga City’s educational initiatives and integrated with real-time location tracking.',
    purpose: 'To help students and residents easily find their way to the nearest Barangay Learning Hub.',
    problem: 'Many users were unfamiliar with the locations of the various Barangay Learning Hubs in the city',
    solution: 'A simple, mobile-friendly web app that shows the user’s current location and guides them step-by-step to the selected Barangay Learning Hub using map data and routing logic.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL', 'LEAFLET']
  },



  'web-EyeQue': {
    title: 'Eye Que',
    category: 'web',
    video: null,
    pictures: 'PROJECT IMAGE/W-Eye Que.png',
    description: 'A barcode scanner tool that checks how efficiently a staff member has assembled a product..',
    fullDescription: 'Eye Que is a productivity-tracking tool designed to evaluate the assembly performance of staff members. After a staff finishes building an item (like a toy car), they scan the product’s assigned barcode. The system then assesses the build time, quality checklist, and required standards to determine whether the assembly was efficient or not efficient. It can be used in training, quality control, or performance review.',
    purpose: 'Eye Que is a productivity-tracking tool designed to evaluate the assembly performance of staff members. After a staff finishes building an item (like a toy car), they scan the product’s assigned barcode. The system then assesses the build time, quality checklist, and required standards to determine whether the assembly was efficient or not efficient. It can be used in training, quality control, or performance review.',
    problem: 'Manual evaluations of staff work are time-consuming, subjective, and inconsistent. It’s hard to track who built what, and how well or quickly they did it.',
    solution: 'Eye Que uses barcode scanning to identify the product and cross-check recorded build metrics. It gives instant feedback on whether the build met efficiency standards, helping managers track progress and workers improve performance.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL', 'BARCODE SCANNER', 'QR CODE']
  },

  'web-FileMagementSystem': {
    title: 'BSBA HRM 2025',
    category: 'web',
    video: 'https://www.youtube.com/embed/-wsabWCormg?si=-ShjzIRMJTGjknle',
    pictures:  'PROJECT IMAGE/W-BSBAHRM.png',
    description: 'A file management platform built for BSBA HRM 2025 students to upload, organize, and access PDFs and videos — turning paper-based documents into digital format.',
    fullDescription: 'This system modernizes academic file storage by allowing students and faculty to upload and manage educational resources, such as PDFs and videos. It aims to replace paper submissions and physical storage with a more accessible, digital environment. The system supports learning continuity, record keeping, and resource sharing.',
    purpose: 'Provide financial professionals with comprehensive tools to manage client portfolios and generate detailed performance reports.',
    problem: 'Uploading large video files traditionally causes web hosting storage to fill up quickly, leading to system slowdowns, increased costs, or upload restrictions. Most file managers struggle to handle large volumes of video data.',
    solution: 'We discovered and implemented a smart workaround or “trick” that bypasses traditional storage limitations — allowing video uploads of over 1 terabyte without maxing out server space. This makes the platform scalable, long-term, and ideal for managing rich media content without relying on expensive third-party services.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL', 'GOOGLE DRIVE API']
  },
    'web-PMS': {
    title: 'PMS Scheduling System',
    category: 'web',
    video: 'https://www.youtube.com/embed/aG1h8FWnp10?si=swXCyjNvQ2xd6iG8',
    pictures: 'PROJECT IMAGE/W-PMS Scheduling System.png',
    description: 'Smart reminders for PMS (Preventive Maintenance Schedule) by mileage or by month.',
    fullDescription: 'Smart reminders for your car’s Preventive Maintenance Schedule (PMS) — whether it’s based on mileage or months of use, get automatic alerts so you never miss a service again.',
    purpose: 'To automatically notify employees or admins when a car or truck is due for Preventive Maintenance (PMS).',
    problem: 'PMS schedules are usually based on two indicators: <br>1)Mileage (Odometer reading) <br>2) Time(e.g., every 6 months) <br>Often, these are tracked manually, leading to missed or delayed maintenance.',
    solution: 'The system tracks both mileage and time.<br> 1) If the odometer reaches the set mileage, the admin is notified.<br>2) If the 6-month interval is nearing, even without reaching the mileage, a reminder is still sent.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL']
  },



    'web-SPINNING WHEEL': {
    title: 'SPINNING WHEEL',
    category: 'web',
    video: 'https://www.youtube.com/embed/lKAOrDFyn2o?si=GWxX7b3Q1g1nrdGp',
    pictures: 'PROJECT IMAGE/W-SpinningWheel.png',
    description: 'A customizable spinning wheel system that allows selecting multiple winners in a single spin.',
    fullDescription: 'Unlike traditional spinning wheels where only one winner is selected per spin, this spinning wheel is designed to allow up to 100 winners in a single spin — as long as the number of participants is greater than the number of winners. It’s built for large-scale raffles or giveaways, improving efficiency and excitement during events with many attendees.',
    purpose: 'To enable fair, efficient, and scalable winner selection for large group raffles or promotions.',
    problem: 'Most spinning wheel systems only allow one winner per spin or a fixed set of winners, making them inefficient for events with many prizes or participants.',
    solution: 'A dynamic spinning wheel that supports multiple winners per spin, scalable to hundreds of participants, ensuring smoother and faster prize draws.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT']
  },









  'desktop-Lockscreen': {
    title: 'Lockscreen',
    category: 'desktop',
    video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560',
    pictures: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'A powerful desktop application for managing inventory, tracking sales, and generating reports for small to medium businesses.',
    fullDescription: 'A powerful desktop application for managing inventory, tracking sales, and generating comprehensive reports for small to medium businesses. Built with Electron for cross-platform compatibility, featuring offline capability and real-time synchronization.',
    purpose: 'Streamline inventory operations with offline capability and real-time sync to improve business efficiency.',
    problem: 'Many businesses struggled with web-based inventory systems that required constant internet connectivity and had limited offline functionality.',
    solution: 'Created a desktop application using Electron with SQLite for local storage and Node.js for backend operations. Implemented smart sync algorithms for seamless data management.',
    technologies: ['Electron', 'SQLite', 'Node.js', 'Chart.js', 'PDF Generator', 'Auto-updater']
  },
    'desktop-Anti Cheat Test': {
    title: 'Anti Cheat Test',
    category: 'desktop',
    video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560',
    pictures: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'A powerful desktop application for managing inventory, tracking sales, and generating reports for small to medium businesses.',
    fullDescription: 'A powerful desktop application for managing inventory, tracking sales, and generating comprehensive reports for small to medium businesses. Built with Electron for cross-platform compatibility, featuring offline capability and real-time synchronization.',
    purpose: 'Streamline inventory operations with offline capability and real-time sync to improve business efficiency.',
    problem: 'Many businesses struggled with web-based inventory systems that required constant internet connectivity and had limited offline functionality.',
    solution: 'Created a desktop application using Electron with SQLite for local storage and Node.js for backend operations. Implemented smart sync algorithms for seamless data management.',
    technologies: ['Electron', 'SQLite', 'Node.js', 'Chart.js', 'PDF Generator', 'Auto-updater']
  },





















  'mobile-BITTS': {
    title: 'Bright Immersion Time Tracking System',
    category: 'mobile',
    video: null,
    pictures: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.',
    fullDescription: 'A comprehensive fitness tracking mobile application that helps users monitor their daily activities, workouts, nutrition, and health metrics. The app includes features like workout planning, progress tracking, social sharing, and personalized recommendations based on user goals.',
    purpose: 'Help users maintain healthy lifestyle habits by providing comprehensive tracking and motivation tools.',
    problem: 'Most fitness apps focus on only one aspect of health and lack integration between different health metrics.',
    solution: 'Created an all-in-one fitness solution that integrates activity tracking, nutrition monitoring, and social features to provide holistic health management.',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit API', 'Chart.js', 'Redux', 'Push Notifications']
  },
    'mobile-SakayGo': {
    title: 'SakayGo',
    category: 'mobile',
    video: null,
    pictures: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.',
    fullDescription: 'A comprehensive fitness tracking mobile application that helps users monitor their daily activities, workouts, nutrition, and health metrics. The app includes features like workout planning, progress tracking, social sharing, and personalized recommendations based on user goals.',
    purpose: 'Help users maintain healthy lifestyle habits by providing comprehensive tracking and motivation tools.',
    problem: 'Most fitness apps focus on only one aspect of health and lack integration between different health metrics.',
    solution: 'Created an all-in-one fitness solution that integrates activity tracking, nutrition monitoring, and social features to provide holistic health management.',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit API', 'Chart.js', 'Redux', 'Push Notifications']
  },




















  'cv-Rock-Drawing': {
    title: 'Computer Vision: Drawing',
    category: 'computer-vision',
    video: 'https://www.youtube.com/embed/example2',
    pictures: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    description: 'Advanced computer vision system for object detection and classification using deep learning algorithms.',
    fullDescription: 'An advanced computer vision system that uses deep learning algorithms to detect and classify objects in real-time. The system can identify multiple objects simultaneously, track their movements, and provide detailed analytics. Applications include security surveillance, quality control in manufacturing, and autonomous vehicle navigation.',
    purpose: 'Automate visual inspection processes and provide intelligent object detection capabilities.',
    problem: 'Manual visual inspection is time-consuming, error-prone, and not scalable for large-scale operations.',
    solution: 'Implemented a deep learning pipeline using convolutional neural networks (CNNs) with real-time processing capabilities and high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'Flask', 'Docker', 'CUDA', 'NumPy']
  },
    'cv-Emotion-Checker': {
    title: 'Computer Vision: Rock, Paper Scissor',
    category: 'computer-vision',
    video: 'https://www.youtube.com/embed/example2',
    pictures: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    description: 'Advanced computer vision system for object detection and classification using deep learning algorithms.',
    fullDescription: 'An advanced computer vision system that uses deep learning algorithms to detect and classify objects in real-time. The system can identify multiple objects simultaneously, track their movements, and provide detailed analytics. Applications include security surveillance, quality control in manufacturing, and autonomous vehicle navigation.',
    purpose: 'Automate visual inspection processes and provide intelligent object detection capabilities.',
    problem: 'Manual visual inspection is time-consuming, error-prone, and not scalable for large-scale operations.',
    solution: 'Implemented a deep learning pipeline using convolutional neural networks (CNNs) with real-time processing capabilities and high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'Flask', 'Docker', 'CUDA', 'NumPy']
  },
    'cv-Facemask-Detector': {
    title: 'Computer Vision: Facemask Detector',
    category: 'computer-vision',
    video: 'https://www.youtube.com/embed/example2',
    pictures: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    description: 'Advanced computer vision system for object detection and classification using deep learning algorithms.',
    fullDescription: 'An advanced computer vision system that uses deep learning algorithms to detect and classify objects in real-time. The system can identify multiple objects simultaneously, track their movements, and provide detailed analytics. Applications include security surveillance, quality control in manufacturing, and autonomous vehicle navigation.',
    purpose: 'Automate visual inspection processes and provide intelligent object detection capabilities.',
    problem: 'Manual visual inspection is time-consuming, error-prone, and not scalable for large-scale operations.',
    solution: 'Implemented a deep learning pipeline using convolutional neural networks (CNNs) with real-time processing capabilities and high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'Flask', 'Docker', 'CUDA', 'NumPy']
  },
    'cv-RockPaperScissor': {
    title: 'Computer Vision: Rock, Paper Scissor',
    category: 'computer-vision',
    video: 'https://www.youtube.com/embed/example2',
    pictures: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    description: 'Advanced computer vision system for object detection and classification using deep learning algorithms.',
    fullDescription: 'An advanced computer vision system that uses deep learning algorithms to detect and classify objects in real-time. The system can identify multiple objects simultaneously, track their movements, and provide detailed analytics. Applications include security surveillance, quality control in manufacturing, and autonomous vehicle navigation.',
    purpose: 'Automate visual inspection processes and provide intelligent object detection capabilities.',
    problem: 'Manual visual inspection is time-consuming, error-prone, and not scalable for large-scale operations.',
    solution: 'Implemented a deep learning pipeline using convolutional neural networks (CNNs) with real-time processing capabilities and high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'Flask', 'Docker', 'CUDA', 'NumPy']
  },
    'cv-SleepinessDetector': {
    title: 'Computer Vision: Sleepiness Detector',
    category: 'computer-vision',
    video: 'https://www.youtube.com/embed/example2',
    pictures: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    description: 'Advanced computer vision system for object detection and classification using deep learning algorithms.',
    fullDescription: 'An advanced computer vision system that uses deep learning algorithms to detect and classify objects in real-time. The system can identify multiple objects simultaneously, track their movements, and provide detailed analytics. Applications include security surveillance, quality control in manufacturing, and autonomous vehicle navigation.',
    purpose: 'Automate visual inspection processes and provide intelligent object detection capabilities.',
    problem: 'Manual visual inspection is time-consuming, error-prone, and not scalable for large-scale operations.',
    solution: 'Implemented a deep learning pipeline using convolutional neural networks (CNNs) with real-time processing capabilities and high accuracy rates.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'Flask', 'Docker', 'CUDA', 'NumPy']
  },



































  'ar-Button': {
    title: 'AR: Dragging a button',
    category: 'augmented-reality',
    video: 'https://www.youtube.com/embed/hhBhlNWXdgI?si=M7Z019qHBuh4558Q',
    pictures: 'PROJECT IMAGE/AR-DraggingAButton.jpeg',
    description: 'Allows users to move a virtual button in the AR environment using touch.',
    fullDescription: 'This feature lets users interact with buttons overlaid on the real world by dragging them across the screen. The button stays within the AR view, giving the user control over its placement to enhance comfort and accessibility during interaction.',
    purpose: 'To provide flexible and personalized control over AR UI elements.',
    problem: 'Fixed-position buttons can block important visuals and reduce usability.',
    solution: 'Draggable buttons allow users to move the interface out of the way or closer to their preferred spot, improving the AR experience.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'COMPUTER VISION']
  },
    'ar-Image_Overlay': {
    title: 'AR: Image Overlay',
    category: 'augmented-reality',
    video: 'https://www.youtube.com/embed/oelsLHOas1c?si=B4ttgTQoMziBUkPY',
    pictures: 'PROJECT IMAGE/AR-ImageOverlay.jpeg',
    description: 'Displays a digital image on top of a real-world object or marker.',
    fullDescription: 'When the AR system detects a specific image or marker through the camera, it overlays a related digital image directly on top of it. This creates a layered visual that blends the real and digital worlds seamlessly.',
    purpose: 'To upgrade printed materials or objects with interactive image enhancements.',
    problem: 'Physical materials are limited to static visuals and lack real-time updates.',
    solution: 'Image overlays let you add digital content without changing the physical item — perfect for education, ads, and design.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'COMPUTER VISION']
  },
    'ar-Video_Overlay': {
    title: 'AR: Video Overlay',
    category: 'augmented-reality',
    video: 'https://www.youtube.com/embed/P4uXX7n9__g?si=pFxoL9esMkPL3kld',
    pictures: 'PROJECT IMAGE/AR-VideoOverlay.jpeg',
    description: 'Plays a video over a real-world object using AR tracking.',
    fullDescription: 'This feature detects a specific surface or object in real-time and plays a video over it. The video appears as if it’s embedded within the environment, offering immersive visual storytelling right on physical items.',
    purpose: 'To combine physical and digital media through engaging video content.',
    problem: 'Printed or static items can’t show movement, sound, or dynamic messages.',
    solution: 'Video overlays bring content to life without needing screens — just a camera and AR marker.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'COMPUTER VISION']
  },




  'vr-WarHistory': {
    title: 'VR: War History',
    category: 'virtual-reality',
    video: 'https://www.youtube.com/embed/example3',
    pictures: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
    description: 'Immersive training environment for professionals using virtual reality technology.',
    fullDescription: 'Immersive training environment for professionals using virtual reality technology. The simulator provides realistic scenarios for high-risk training situations, allowing users to practice procedures safely and repeatedly without real-world consequences.',
    purpose: 'Provide safe, immersive training experiences for high-risk scenarios while reducing training costs.',
    problem: 'Traditional training methods for high-risk scenarios are expensive, dangerous, and often not repeatable.',
    solution: 'Created VR training modules using Unity and Oculus SDK that simulate real-world scenarios with haptic feedback and performance analytics.',
    technologies: ['Unity', 'Oculus SDK', 'C#', 'Haptic Feedback', 'Analytics Dashboard', 'Multiplayer Networking']
  },

    'vr-ChangeVRBaseonButton': {
    title: 'VR: Selection of Virtual World ',
    category: 'virtual-reality',
    video: 'https://www.youtube.com/embed/example3',
    pictures: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
    description: 'Immersive training environment for professionals using virtual reality technology.',
    fullDescription: 'Immersive training environment for professionals using virtual reality technology. The simulator provides realistic scenarios for high-risk training situations, allowing users to practice procedures safely and repeatedly without real-world consequences.',
    purpose: 'Provide safe, immersive training experiences for high-risk scenarios while reducing training costs.',
    problem: 'Traditional training methods for high-risk scenarios are expensive, dangerous, and often not repeatable.',
    solution: 'Created VR training modules using Unity and Oculus SDK that simulate real-world scenarios with haptic feedback and performance analytics.',
    technologies: ['Unity', 'Oculus SDK', 'C#', 'Haptic Feedback', 'Analytics Dashboard', 'Multiplayer Networking']
  }

};

// Pagination variables
let currentPage = 1;
let projectsPerPage = 6;
let allProjects = [];
let filteredProjects = [];

// Dynamic project generation function
function generateProjectCards() {
  const projectsContainer = document.querySelector('.projects-grid');
  if (!projectsContainer) return;
  
  projectsContainer.innerHTML = '';
  
  Object.entries(projectData).forEach(([key, project]) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-category', project.category);
    
    // Get default image based on category
    const defaultImages = {
      'web': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      'desktop': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      'computer-vision': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      'augmented-reality': 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop',
      'virtual-reality': 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop'
    };
    
    const categoryNames = {
      'web': 'Web Apps',
      'desktop': 'Desktop App',
      'mobile': 'Mobile App',
      'computer-vision': 'Computer Vision',
      'augmented-reality': 'Augmented Reality',
      'virtual-reality': 'Virtual Reality'
    };
    
    const imageUrl = project.pictures || defaultImages[project.category] || defaultImages['web'];
    
    projectCard.innerHTML = `
      <div class="project-content-wrapper">
        <div class="project-image-container">
          <div class="project-image">
            <img src="${imageUrl}" alt="${project.title}">
          </div>
          <div class="project-overlay">
            <div class="project-hover-content">
              ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="project-info">
          <div class="project-category">${categoryNames[project.category] || project.category}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description || project.fullDescription.substring(0, 120) + '...'}</p>
          <div class="project-purpose">
            <strong>Purpose:</strong> ${project.purpose.substring(0, 80) + (project.purpose.length > 80 ? '...' : '')}
          </div>
          <button class="project-view-more" data-project="${key}">
            View More <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
  initLoadingScreen();
  initParticleBackground();
  initNavigation();
  generateProjectCards(); // Generate project cards dynamically
  initProjectFilter();
  initProjectModal();
  initContactForm();
  initScrollAnimations();
  initSkillBars();
  initPagination();
});

// Loading Screen
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
}

// Particle Background with Cursor Avoidance
function initParticleBackground() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const numParticles = Math.floor((canvas.width * canvas.height) / 8000);

    for (let i = 0; i < numParticles; i++) {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 3 + 1,
        originalX: 0,
        originalY: 0,
        opacity: Math.random() * 0.6 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2
      };

      particle.originalX = particle.x;
      particle.originalY = particle.y;
      particles.push(particle);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      // Calculate distance from mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 180;

      if (distance < maxDistance) {
        // Repel particle from mouse with stronger force
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        particle.vx -= Math.cos(angle) * force * 1.2;
        particle.vy -= Math.sin(angle) * force * 1.2;
        
        // Add some randomness for organic movement
        particle.vx += (Math.random() - 0.5) * 0.5;
        particle.vy += (Math.random() - 0.5) * 0.5;
        
        // Increase size and opacity when near cursor
        particle.radius = Math.min(particle.radius * 1.1, 6);
        particle.opacity = Math.min(particle.opacity * 1.2, 1);
      } else {
        // Return to original position
        particle.vx += (particle.originalX - particle.x) * 0.015;
        particle.vy += (particle.originalY - particle.y) * 0.015;
        
        // Return to normal size and opacity
        particle.radius = Math.max(particle.radius * 0.99, 1);
        particle.opacity = Math.max(particle.opacity * 0.995, 0.3);
      }

      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Create pulsing effect
      particle.pulsePhase += 0.02;
      const pulseOpacity = particle.opacity + Math.sin(particle.pulsePhase) * 0.2;

      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      
      // Create gradient for glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius * 4
      );
      gradient.addColorStop(0, `rgba(100, 255, 218, ${pulseOpacity})`);
      gradient.addColorStop(0.4, `rgba(100, 255, 218, ${pulseOpacity * 0.4})`);
      gradient.addColorStop(1, `rgba(100, 255, 218, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw connections
      particles.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Dynamic line opacity based on distance and particle opacity
            const lineOpacity = 0.3 * (1 - distance / 120) * (particle.opacity + otherParticle.opacity) / 2;
            ctx.strokeStyle = `rgba(100, 255, 218, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  }

  function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function handleMouseLeave() {
    mouse.x = -1000;
    mouse.y = -1000;
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    } else {
      animate();
    }
  }

  resizeCanvas();
  animate();

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Navigation
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navHeight = 80;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });
  });
}

// Project Filter with Pagination
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');

  if (!filterButtons.length || !projectCards.length) return;

  // Store all projects
  allProjects = Array.from(projectCards);
  filteredProjects = [...allProjects];
  
  // Initial display
  displayProjects();

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filterValue = button.getAttribute('data-filter');
      
      // Filter projects
      if (filterValue === 'all') {
        filteredProjects = [...allProjects];
      } else {
        filteredProjects = allProjects.filter(card => {
          const cardCategory = card.getAttribute('data-category');
          return cardCategory === filterValue;
        });
      }
      
      // Reset to first page and display
      currentPage = 1;
      displayProjects();
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      
      if (searchTerm === '') {
        // If search is empty, show filtered projects based on current filter
        const activeFilter = document.querySelector('.filter-tab.active').getAttribute('data-filter');
        if (activeFilter === 'all') {
          filteredProjects = [...allProjects];
        } else {
          filteredProjects = allProjects.filter(card => {
            const cardCategory = card.getAttribute('data-category');
            return cardCategory === activeFilter;
          });
        }
      } else {
        // Search within current filter
        const activeFilter = document.querySelector('.filter-tab.active').getAttribute('data-filter');
        let baseProjects = activeFilter === 'all' ? allProjects : allProjects.filter(card => {
          const cardCategory = card.getAttribute('data-category');
          return cardCategory === activeFilter;
        });
        
        filteredProjects = baseProjects.filter(card => {
          const title = card.querySelector('.project-title').textContent.toLowerCase();
          const description = card.querySelector('.project-description').textContent.toLowerCase();
          const category = card.querySelector('.project-category').textContent.toLowerCase();
          
          return title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm);
        });
      }
      
      // Reset to first page and display
      currentPage = 1;
      displayProjects();
    });
  }
}

// Project Modal
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const viewMoreButtons = document.querySelectorAll('.project-view-more');
  
  if (!modal || !modalTitle || !modalContent || !modalClose) return;
  
  // Open modal
  viewMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      const project = projectData[projectId];
      
      if (project) {
        openModal(project);
      }
    });
  });
  
  // Close modal
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  function openModal(project) {
    modalTitle.textContent = project.title;
    
    modalContent.innerHTML = `
      ${project.video ? `
        <div class="modal-video">
          <iframe src="${project.video}" allowfullscreen></iframe>
        </div>
      ` : ''}
      
      <div class="modal-section">
        <h4 class="modal-section-title">Full Description</h4>
        <div class="modal-section-content">${project.fullDescription}</div>
        <div class="modal-tech-tags">
          ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      
      <div class="modal-sections-grid">
        <div class="modal-section">
          <h4 class="modal-section-title">Purpose</h4>
          <div class="modal-section-content">${project.purpose}</div>
        </div>
        
        <div class="modal-section">
          <h4 class="modal-section-title">Problem Encountered</h4>
          <div class="modal-section-content">${project.problem}</div>
        </div>
        
        <div class="modal-section">
          <h4 class="modal-section-title">Solution</h4>
          <div class="modal-section-content">${project.solution}</div>
        </div>
        
        <div class="modal-section modal-tech-grid">
          <h4 class="modal-section-title">Technologies</h4>
          <div class="modal-section-content">${project.technologies.join(', ')}</div>
        </div>
      </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const toast = document.getElementById('toast');
  const toastMessage = document.querySelector('.toast-message');
  const toastClose = document.querySelector('.toast-close');
  
  if (!form || !submitButton || !toast) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    
    // Validate form
    let isValid = true;
    
    if (!name) {
      document.getElementById('name-error').textContent = 'Please enter your name';
      isValid = false;
    }
    
    if (!email) {
      document.getElementById('email-error').textContent = 'Please enter your email';
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!subject) {
      document.getElementById('subject-error').textContent = 'Please enter a subject';
      isValid = false;
    }
    
    if (!message) {
      document.getElementById('message-error').textContent = 'Please enter your message';
      isValid = false;
    } else if (message.length < 10) {
      document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      // Hide loading state
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      submitButton.disabled = false;
      
      // Show success message
      showToast('Message sent successfully!');
      
      // Reset form
      form.reset();
    }, 2000);
  });
  
  // Toast close button
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
    });
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe elements for reveal animation
  document.querySelectorAll('.reveal-text').forEach(el => {
    observer.observe(el);
  });
}

// Skill Bars Animation
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const level = skillBar.getAttribute('data-level');
        skillBar.style.width = level + '%';
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });
}

// Pagination Functions
function displayProjects() {
  // Hide all projects first
  allProjects.forEach(card => {
    card.style.display = 'none';
  });
  
  // Calculate pagination
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  
  // Show current page projects
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  currentProjects.forEach(card => {
    card.style.display = 'block';
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
  });
  
  // Update pagination controls
  updatePaginationControls(totalPages, totalProjects);
}

function updatePaginationControls(totalPages, totalProjects) {
  const paginationContainer = document.getElementById('paginationContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const paginationNumbers = document.getElementById('paginationNumbers');
  const paginationInfo = document.getElementById('paginationInfo');
  
  if (!paginationContainer) return;
  
  // Show/hide pagination
  if (totalPages <= 1) {
    paginationContainer.style.display = 'none';
    return;
  } else {
    paginationContainer.style.display = 'flex';
  }
  
  // Update prev/next buttons
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  
  // Update page numbers
  paginationNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      displayProjects();
    });
    paginationNumbers.appendChild(pageBtn);
  }
  
  // Update info
  const startIndex = (currentPage - 1) * projectsPerPage + 1;
  const endIndex = Math.min(currentPage * projectsPerPage, totalProjects);
  paginationInfo.textContent = `${startIndex}-${endIndex} of ${totalProjects}`;
}

function initPagination() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayProjects();
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        displayProjects();
      }
    });
  }
}

// Smooth scroll for hero buttons
document.addEventListener('DOMContentLoaded', function() {
  const heroButtons = document.querySelectorAll('.portfolio-btn');
  
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navHeight = 80;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});