document.addEventListener('DOMContentLoaded', function() {
  // Handle navigation click
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('main section');
  
  // Show section based on hash or default to home
  function showActiveSection() {
    const hash = window.location.hash || '#home';
    
    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Show active section (handle special case for menu)
    let targetSelector = hash;
    if (hash === '#menu') {
      targetSelector = '#products'; // Map #menu hash to #products section
    }
    
    const activeSection = document.querySelector(targetSelector);
    if (activeSection) {
      activeSection.style.display = 'block';
      
      // Apply background image to main element when home section is active
      const mainElement = document.querySelector('main');
      if (hash === '#home') {
        mainElement.classList.add('home-background');
      } else {
        mainElement.classList.remove('home-background');
      }
      
      // Ensure nested sections display properly
      if (activeSection.id === 'music') {
        const musicContainer = activeSection.querySelector('.music-container');
        if (musicContainer) musicContainer.style.display = 'flex';
        
        const audioPlayer = activeSection.querySelector('.audio-player');
        if (audioPlayer) audioPlayer.style.display = 'block';
      }
      
      // Ensure home content displays properly
      if (activeSection.id === 'home') {
        const homePanels = activeSection.querySelector('.home-panels');
        if (homePanels) homePanels.style.display = 'flex';
        
        const introBanner = activeSection.querySelector('.intro-banner');
        if (introBanner) introBanner.style.display = 'block';
      }
    }
    
    // Highlight active nav link
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Initial load
  showActiveSection();
  
  // Listen for hash changes
  window.addEventListener('hashchange', showActiveSection);
  
  // Handle video playlist
  const videoList = document.querySelectorAll('#video-list a');
  const videoPlayer = document.getElementById('video-player');
  const currentTrackElement = document.getElementById('current-track');
  const playPauseButton = document.getElementById('play-pause');
  const shuffleToggle = document.getElementById('shuffle-toggle');
  const volumeControl = document.getElementById('volume');
  
  // Track shuffle state
  let shuffleMode = false;
  
  // Function to play a specific video
  function playVideo(videoLink) {
    // Update video source
    const videoSrc = videoLink.getAttribute('data-video-src');
    videoPlayer.querySelector('source').src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
    
    // Update current track name
    const trackName = videoLink.textContent;
    currentTrackElement.textContent = trackName;
    
    // Mark as active
    videoList.forEach(item => item.classList.remove('active'));
    videoLink.classList.add('active');
    
    // Update play/pause button
    playPauseButton.textContent = 'Pause';
  }
  
  // Add click event for each playlist item
  videoList.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      playVideo(this);
    });
  });
  
  // Add shuffle toggle functionality
  shuffleToggle.addEventListener('click', function() {
    shuffleMode = !shuffleMode;
    if (shuffleMode) {
      this.classList.add('on');
      this.textContent = 'Shuffle On';
    } else {
      this.classList.remove('on');
      this.textContent = 'Shuffle';
    }
  });
  
  // Add ended event to auto-play next video (with shuffle support)
  videoPlayer.addEventListener('ended', function() {
    if (shuffleMode) {
      // Get all playlist items and select random one (excluding current)
      const items = Array.from(document.querySelectorAll('#video-list li a'));
      const currentVideo = document.querySelector('#video-list a.active');
      
      // Filter out current video from selection pool
      const availableVideos = items.filter(item => item !== currentVideo);
      
      // Select random video from available options
      const randomIndex = Math.floor(Math.random() * availableVideos.length);
      const nextVideo = availableVideos[randomIndex];
      
      // Play the randomly selected video
      playVideo(nextVideo);
    } else {
      // Original sequential logic
      const currentVideo = document.querySelector('#video-list a.active');
      const currentLi = currentVideo.parentElement;
      let nextLi = currentLi.nextElementSibling;
      
      // If there's no next item, loop back to the first
      if (!nextLi) {
        nextLi = document.querySelector('#video-list li:first-child');
      }
      
      // Get the anchor and play it
      const nextVideo = nextLi.querySelector('a');
      playVideo(nextVideo);
    }
  });
  
  // Play/Pause button
  playPauseButton.addEventListener('click', function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
      this.textContent = 'Pause';
    } else {
      videoPlayer.pause();
      this.textContent = 'Play';
    }
  });
  
  // Volume control
  volumeControl.addEventListener('input', function() {
    videoPlayer.volume = this.value;
  });
  
  // Product descriptions object
  const productDescriptions = {
    "Premium Gyokuro Japanese Green Tea": "Originating in 19th century Japan, Premium Gyokuro is a shade-grown green tea cultivated by covering the plants for about three weeks before harvest to enhance its unique, sweet flavor profile. Known for its high levels of L-theanine and antioxidants, Gyokuro provides sustained mental alertness and focus without jitters, while also supporting heart health, dental well-being, and potentially strengthening the immune system.",
    
    "Premium Japanese Sencha Green tea": "Premium Sencha is Japan's most popular green tea, celebrated for its refreshing taste with grassy, oceanic notes. Harvested from the first flush of leaves in spring, our Sencha undergoes careful steaming that preserves its vibrant green color and nutritional benefits. Rich in catechins and vitamins, it offers natural energy and supports overall wellness.",
    
    "Premium Keemun (Qimen) Black Tea": "Originating from Qimen County in China's Anhui province, this distinguished black tea is known as the 'Burgundy of teas' for its complex winey character. With subtle notes of orchid, pine, and a hint of smokiness, our Premium Keemun offers an elegant, smooth body with a natural sweetness. A perfect morning or afternoon tea with remarkable antioxidant properties.",
    
    "Premium Long Jing Chinese Green Tea": "Also known as Dragon Well, this legendary Chinese green tea dates back to the Song Dynasty. Hand-pressed in traditional woks, Long Jing features a distinctive flat leaf shape and delivers a gentle, sweet flavor with chestnut notes. Grown in the pristine hills around West Lake, it's prized for its jade color and calming effects.",
    
    "Premium Rougui (Wuyi) Oolong Tea": "From the famed Wuyi Mountain region, Rougui (Cinnamon) Oolong is known for its deep, mineral-rich character with warm cinnamon notes. The tea grows in rocky soil that imparts a distinctive 'yan yun' (rock flavor) to the leaves. Semi-oxidized and roasted, this oolong offers exceptional complexity and a lingering sweet finish.",
    
    "Premium Tie Guan Yin Oolong Tea": "Named after the Iron Goddess of Mercy, this renowned oolong undergoes careful oxidation to create its characteristic floral aroma and smooth finish. Our traditional style Tie Guan Yin features tightly rolled leaves that unfurl beautifully when steeped, revealing orchid notes and a rich golden liquor. Perfect for multiple infusions, each revealing new depth of flavor.",
    
    "Premium Uji Matcha Japanese Green Tea (Ceremonial-grade)": "This ceremonial-grade matcha from Uji, Japan's most revered tea-growing region, represents the pinnacle of Japanese tea tradition. Stone-ground into an ultrafine powder from shade-grown tencha leaves, our matcha delivers an intense sweetness, brilliant emerald color, and creamy froth when whisked. Rich in L-theanine, it provides calm alertness perfect for meditation.",
    
    "Premium YaShiXiang (Duck Shit) Dan cong Oolong Tea": "Despite its unusual name, this rare Dan Cong oolong from Phoenix Mountain is one of China's most sought-after teas. The name refers to the distinctive yellow-brown soil where these tea bushes grow. YaShiXiang offers an incredibly complex honey-orchid aroma with notes of stone fruits and a remarkable natural sweetness that persists through multiple infusions.",
    
    "Premium ZhangPingShuiXian Oolong Tea": "Unique among oolongs, ZhangPingShuiXian is compressed into flat cakes before drying, creating its characteristic appearance. From Fujian province, this rare tea combines the floral notes of lighter oolongs with a rich, satisfying body. When brewed, it releases a captivating orchid fragrance and produces a golden-amber infusion with exceptional clarity."
  };
  
  // Product prices object
  const productPrices = {
    "Premium Gyokuro Japanese Green Tea": "₱2,350.00 PHP",
    "Premium Japanese Sencha Green tea": "₱700.00 PHP",
    "Premium Keemun (Qimen) Black Tea": "₱2,350.00 PHP",
    "Premium Long Jing Chinese Green Tea": "₱2,250.00 PHP",
    "Premium Rougui (Wuyi) Oolong Tea": "₱1,500.00 PHP",
    "Premium Tie Guan Yin Oolong Tea": "₱2,500.00 PHP",
    "Premium Uji Matcha Japanese Green Tea (Ceremonial-grade)": "₱2,500.00 PHP",
    "Premium YaShiXiang (Duck Shit) Dan cong Oolong Tea": "₱2,000.00 PHP",
    "Premium ZhangPingShuiXian Oolong Tea": "₱2,000.00 PHP"
  };
  
  // Product Modal functionality
  const productCards = document.querySelectorAll('.product-card');
  const modal = document.getElementById('product-modal');
  const modalImage = modal.querySelector('.modal-image img');
  const modalTitle = modal.querySelector('.modal-title');
  const modalText = modal.querySelector('.modal-text');
  const modalPrice = modal.querySelector('.price-value');
  const closeModalBtn = modal.querySelector('.close-modal');
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');
  
  // Store all products for navigation
  const allProducts = [];
  let currentProductIndex = 0;
  
  // Collect all products
  productCards.forEach(card => {
    const img = card.querySelector('img');
    const caption = card.querySelector('figcaption');
    const productName = caption.textContent;
    
    allProducts.push({
      name: productName,
      src: img.src,
      alt: img.alt
    });
  });
  
  // Open modal when clicking on a product card
  productCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      // Get product details
      const img = this.querySelector('img');
      const caption = this.querySelector('figcaption');
      const productName = caption.textContent;
      
      // Set current product index
      currentProductIndex = index;
      
      // Show the product
      showProduct(currentProductIndex);
    });
  });
  
  // Function to show product in modal
  function showProduct(index) {
    const product = allProducts[index];
    
    // Set modal content
    modalImage.src = product.src;
    modalImage.alt = product.alt;
    modalTitle.textContent = product.name;
    
    // Set the appropriate description based on the product title
    if (productDescriptions[product.name]) {
      modalText.textContent = productDescriptions[product.name];
    } else {
      modalText.textContent = "This premium tea is sourced from select regions known for exceptional quality. Our careful processing preserves the natural flavor profile and beneficial properties. Perfect for special tea ceremonies or everyday enjoyment.";
    }
    
    // Set the price based on the product name
    if (productPrices[product.name]) {
      modalPrice.textContent = productPrices[product.name];
    } else {
      modalPrice.textContent = "Price upon request";
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
  
  // Previous product button
  prevBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent closing modal
    currentProductIndex = (currentProductIndex - 1 + allProducts.length) % allProducts.length;
    showProduct(currentProductIndex);
  });
  
  // Next product button
  nextBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent closing modal
    currentProductIndex = (currentProductIndex + 1) % allProducts.length;
    showProduct(currentProductIndex);
  });
  
  // Add keyboard support for navigation
  document.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
      currentProductIndex = (currentProductIndex - 1 + allProducts.length) % allProducts.length;
      showProduct(currentProductIndex);
    } else if (e.key === 'ArrowRight') {
      currentProductIndex = (currentProductIndex + 1) % allProducts.length;
      showProduct(currentProductIndex);
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Handle the "Other" position field visibility
  const positionSelect = document.getElementById('position');
  const otherPositionContainer = document.getElementById('other-position-container');
  const otherPositionInput = document.getElementById('other-position');
  
  if (positionSelect && otherPositionContainer) {
    positionSelect.addEventListener('change', function() {
      if (this.value === 'Other') {
        otherPositionContainer.style.display = 'block';
        otherPositionInput.setAttribute('required', '');
      } else {
        otherPositionContainer.style.display = 'none';
        otherPositionInput.removeAttribute('required');
      }
    });
  }

  // Fun confetti effect on nav logo click
  const navLogo = document.querySelector('.nav-logo');
  if (navLogo) {
    navLogo.addEventListener('click', function(e) {
      // Create a canvas element for confetti
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.width = navLogo.offsetWidth;
      canvas.height = navLogo.offsetHeight;
      navLogo.style.position = 'relative';
      navLogo.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      const confettiCount = 30;
      const confetti = [];
      for (let i = 0; i < confettiCount; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          radius: Math.random() * 4 + 2,
          density: Math.random() * confettiCount,
          color: 'rgba(' + Math.floor(Math.random() * 255) + ',' +
                        Math.floor(Math.random() * 255) + ',' +
                        Math.floor(Math.random() * 255) + ',1)',
          tilt: Math.floor(Math.random() * 10) - 10,
          tiltAngleIncremental: Math.random() * 0.07 + 0.05,
          tiltAngle: 0
        });
      }
      
      function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(function(c) {
          c.tiltAngle += c.tiltAngleIncremental;
          c.y += (Math.cos(c.density) + 3 + c.radius / 2) / 2;
          c.x += Math.sin(0);
          c.tilt = Math.sin(c.tiltAngle) * 15;
          ctx.beginPath();
          ctx.lineWidth = c.radius;
          ctx.strokeStyle = c.color;
          ctx.moveTo(c.x + c.tilt + c.radius / 2, c.y);
          ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.radius / 2);
          ctx.stroke();
        });
      }
      
      const confettiInterval = setInterval(drawConfetti, 16);
      
      setTimeout(function() {
        clearInterval(confettiInterval);
        navLogo.removeChild(canvas);
      }, 1500);
    });
  }
});
