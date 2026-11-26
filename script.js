// Navigasi mobile
const navToggle = document.getElementById("navToggle");
const topnav = document.getElementById("topnav");

navToggle.addEventListener("click", () => {
  topnav.classList.toggle("open");
});

// Salin email otomatis
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyStatus = document.getElementById("copyStatus");

copyEmailBtn.addEventListener("click", () => {
  const email = copyEmailBtn.getAttribute("data-email");
  navigator.clipboard.writeText(email).then(() => {
    copyStatus.textContent = "Email berhasil disalin: " + email;
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 3000);
  });
});

// Ganti konten bagian PROJECT sesuai riset & proyek asli
const projectDetails = {
  dnn: {
    boxHtml: `<p><strong>Riset &amp; Publikasi 1:</strong> Comparative Hyperparameter Optimization of Deep Neural Networks Using Genetic Algorithm and Particle Swarm Optimization for Diabetes Prediction</p>`,
    descHtml: `Penelitian ini membandingkan secara langsung <strong>Genetic Algorithm (GA)</strong> dan <strong>Particle Swarm Optimization (PSO)</strong> untuk optimasi hyperparameter pada <strong>Deep Neural Network (DNN)</strong> menggunakan <strong>1.493 data rekam medis</strong> dari RSUD Kolonodale, Morowali Utara. Model <strong>DNN-GA</strong> mencapai akurasi tertinggi <strong>95,76%</strong> (F1-score 0,96) dibanding baseline (93,97%) dan DNN-PSO (94,64%).`
  },
  dt: {
    boxHtml: `<p><strong>Publikasi Jurnal (Sinta 3):</strong> Grid Search Hyperparameter Analysis in Optimizing The Decision Tree Method for Diabetes Prediction (DOI: 10.56705/ijodas.v5i3.190)</p>`,
    descHtml: `Menggunakan <strong>768 data rekam medis</strong> dengan 8 atribut klinis, penerapan <strong>Grid Search Hyperparameter Tuning</strong> pada algoritma <strong>Decision Tree</strong> berhasil meningkatkan akurasi klasifikasi dari <strong>76%</strong> menjadi <strong>81%</strong>, dengan kadar glukosa darah dan BMI sebagai faktor paling dominan.`
  },
  web: {
    boxHtml: `<p><strong>Proyek Web &amp; Aplikasi:</strong> Pengembangan Website, Dashboard &amp; Aplikasi Berbasis Web / React Native</p>`,
    descHtml: `Membangun antarmuka website portofolio, pengembangan website sekolah pada kegiatan KKP-Plus, serta implementasi proyek berbasis web dan aplikasi menggunakan HTML, CSS, JavaScript, dan React Native.`
  }
};

const tabPills = document.querySelectorAll(".tab-pill");
const titleBox = document.querySelector(".project-title-box");
const descEl = document.querySelector(".project-desc");

tabPills.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabPills.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const key = tab.getAttribute("data-proj");
    const item = projectDetails[key];
    if (item) {
      titleBox.innerHTML = item.boxHtml;
      descEl.innerHTML = item.descHtml;
    }
  });
});