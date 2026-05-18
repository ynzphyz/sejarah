// Timeline Data with Images
const timelineData = [
  {
    date: "Juli 1997",
    title: "Krisis Moneter Asia Melanda",
    desc: "Krisis keuangan Asia menghantam Indonesia. Rupiah mulai melemah terhadap dolar, memicu kepanikan pasar dan penarikan kredit besar-besaran oleh investor asing.",
    type: "ekonomi",
    image: "image/krisis monemeter.png"
  },
  {
    date: "Januari 1998",
    title: "Rupiah Terjun Bebas",
    desc: "Nilai tukar rupiah merosot tajam hingga menyentuh Rp 16.000 per dolar. Enam belas bank swasta dilikuidasi. Kepanikan pembelian sembako melanda seluruh kota.",
    type: "ekonomi",
    image: "image/rupiah terjun bebas .png"
  },
  {
    date: "1–8 Mei 1998",
    title: "Harga BBM & Listrik Naik Drastis",
    desc: "Pemerintah menaikkan harga BBM 70% dan tarif listrik hingga 300%. Demonstrasi mahasiswa mulai meletus di berbagai kampus. Kerusuhan awal pecah di Medan, Sumatera Utara.",
    type: "politik",
    image: "image/harga bbm .png"
  },
  {
    date: "9 Mei 1998",
    title: "Soeharto Terbang ke Kairo",
    desc: "Presiden Soeharto berangkat ke Kairo, Mesir, menghadiri KTT G-15. Ini menjadi kunjungan luar negeri terakhirnya sebagai presiden di tengah krisis yang memuncak.",
    type: "politik",
    image: "image/soeharto terbang.png"
  },
  {
    date: "12 Mei 1998",
    title: "Tragedi Trisakti — 4 Mahasiswa Gugur",
    desc: "Lebih dari 6.000 mahasiswa, staf, dan dosen Universitas Trisakti berdemonstrasi damai. Saat hendak long march ke DPR, aparat menembak kerumunan. Empat mahasiswa gugur: Elang Mulia Lesmana, Heri Hertanto, Hafidin Royan, dan Hendriawan Sie.",
    type: "kritis",
    image: "image/tragedi trisakti.png"
  },
  {
    date: "13 Mei 1998",
    title: "Kerusuhan Meletus di Jakarta",
    desc: "Sehari setelah Tragedi Trisakti, amarah rakyat meledak. Massa membakar kendaraan, merusak properti, dan menyerbu pusat perbelanjaan. Kerusuhan menjalar ke Bogor, Tangerang, dan Bekasi.",
    type: "kritis",
    image: "image/kerusuhan meletus di jakarta.png"
  },
  {
    date: "14 Mei 1998",
    title: "Kekerasan Rasial terhadap Etnis Tionghoa",
    desc: "Kerusuhan menarget etnis Tionghoa. Toko dan rumah milik warga Tionghoa dijarah dan dibakar. Terjadi pelecehan seksual massal. Ribuan warga Tionghoa berusaha mengungsi ke luar negeri.",
    type: "kritis",
    image: "image/warga tionghoa mengungsi .png"
  },
  {
    date: "15 Mei 1998",
    title: "Tragedi Mall Klender — 273 Tewas Terbakar",
    desc: "Puncak kerusuhan. Sedikitnya 273 orang tewas terpanggang di Sentra Plaza Klender Jakarta Timur dan Ciledug Plaza Tangerang setelah massa menjarah lalu membakar kedua pusat perbelanjaan tersebut.",
    type: "kritis",
    image: "image/tragedi mall klender.png"
  },
  {
    date: "18–19 Mei 1998",
    title: "Ribuan Mahasiswa Duduki Gedung DPR/MPR",
    desc: "Ribuan mahasiswa dari seluruh Indonesia menduduki atap gedung DPR/MPR. Ketua DPR Harmoko secara terbuka meminta Soeharto mengundurkan diri. Soeharto memanggil tokoh-tokoh Islam dan publik.",
    type: "politik",
    image: "image/ribuan mahasiswa.png"
  },
  {
    date: "21 Mei 1998",
    title: "Soeharto Mundur — Era Reformasi Dimulai",
    desc: "Tepat pukul 09.05 WIB di Istana Merdeka, Soeharto resmi mengumumkan pengunduran dirinya setelah 32 tahun berkuasa. B.J. Habibie disumpah sebagai Presiden RI ke-3. Era Reformasi resmi dimulai.",
    type: "politik",
    image: "image/pengunduran diri soehaerto.png"
  }
];

// Render Timeline - Full Width Magazine Style
function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('article');
    const hasImage = item.image ? '' : 'no-image';
    timelineItem.className = `timeline-item ${item.type === 'kritis' ? 'critical' : ''} ${hasImage}`;
    timelineItem.style.transitionDelay = `${index * 0.1}s`;
    
    let imageHTML = '';
    if (item.image) {
      imageHTML = `
        <div class="timeline-image-wrapper">
          <img src="${item.image}" alt="${item.title}" class="timeline-img">
        </div>
      `;
    }
    
    timelineItem.innerHTML = `
      ${imageHTML}
      <div class="timeline-content">
        <time class="timeline-date">${item.date}</time>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    
    timeline.appendChild(timelineItem);
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-up elements
function observeElements() {
  const fadeElements = document.querySelectorAll('.fade-up, .timeline-item');
  fadeElements.forEach(el => observer.observe(el));
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString('id-ID');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString('id-ID');
    }
  }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number[data-target]');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        animateCounter(stat, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll behavior - Always visible
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Navbar always visible - removed hide logic
  // Just add a class for styling if needed
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Scrollspy for navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.pageYOffset + 200;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Reading Progress Bar
const readingProgress = document.getElementById('readingProgress');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.pageYOffset;
  const progress = (scrolled / documentHeight) * 100;
  
  readingProgress.style.width = `${progress}%`;
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});

// Web Share API
const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', async () => {
  const shareData = {
    title: 'Tragedi Mei 1998: Lembaran Hitam Indonesia',
    text: 'Sejarah lengkap tentang Tragedi Mei 1998 yang mengubah Indonesia selamanya.',
    url: window.location.href
  };
  
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin ke clipboard!');
    }
  } catch (err) {
    console.log('Error sharing:', err);
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  observeElements();
  
  // Observe stats section
  const korbanSection = document.getElementById('korban');
  if (korbanSection) {
    statsObserver.observe(korbanSection);
  }
  
  // Trigger hero animations
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-up').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 150);
    });
  }, 300);
});
