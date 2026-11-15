// Data Detail Riset & Proyek Berdasarkan Publikasi Asli Hamdani
const projectData = {
  proj1: {
    category: "Deep Learning & Metaheuristik",
    title: "Comparative Hyperparameter Optimization of Deep Neural Networks Using GA and PSO for Diabetes Prediction",
    description:
      "Penelitian perbandingan head-to-head antara Genetic Algorithm (GA) dan Particle Swarm Optimization (PSO) untuk hyperparameter tuning pada Deep Neural Network (DNN) menggunakan 1.493 rekam medis klinis[cite: 9].",
    highlights: [
      "Menggunakan dataset klinis dari RSUD Kolonodale, Morowali Utara sebanyak 1.493 sampel rekam medis[cite: 13].",
      "Model DNN-GA terbukti lebih unggul dalam menghindari local optima dan mencapai akurasi tertinggi sebesar 95.76% (F1-score 0.96)[cite: 9].",
      "Membuktikan bahwa operator crossover dan mutation pada GA lebih efektif dibanding pergerakan kecepatan partikel PSO pada arsitektur DNN kompleks[cite: 22]."
    ],
    github: "https://github.com/username/dnn-ga-pso-diabetes"
  },
  proj2: {
    category: "Machine Learning / Publikasi Sinta 3",
    title: "Grid Search Hyperparameter Analysis in Optimizing The Decision Tree Method for Diabetes Prediction",
    description:
      "Studi penerapan teknik Grid Search Hyperparameter Tuning untuk mengoptimalkan algoritma Decision Tree dalam mendeteksi risiko diabetes dini[cite: 1].",
    highlights: [
      "Memanfaatkan 768 data rekam medis dengan 8 atribut klinis utama (kadar glukosa, BMI, tekanan darah, insulin, dll)[cite: 3].",
      "Berhasil meningkatkan performa akurasi model awal dari 76% menjadi 81% setelah optimasi Grid Search[cite: 1].",
      "Analisis pohon keputusan mengonfirmasi bahwa kadar glukosa darah dan BMI memiliki kontribusi paling dominan dalam prediksi risiko[cite: 1]."
    ],
    github: "https://github.com/username/gridsearch-decision-tree"
  },
  proj3: {
    category: "Web Development & Database",
    title: "Sistem Dashboard Web & Manajemen Aset Instansi",
    description:
      "Pengembangan aplikasi berbasis web untuk pelaporan data, pencatatan arsip, dan pemantauan informasi terstruktur.",
    highlights: [
      "Perancangan arsitektur basis data relasional menggunakan PostgreSQL.",
      "Pembangunan backend menggunakan kerangka kerja CodeIgniter 4 dengan antarmuka yang responsif.",
      "Melakukan pengujian fungsionalitas dan validasi integritas data sistem."
    ],
    github: "https://github.com/username/asset-dashboard"
  }
};

// Kontrol Modal Detail Proyek
const modal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-project");
    const data = projectData[key];
    if (!data) return;

    document.getElementById("modalCategory").textContent = data.category;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalGithub").href = data.github;

    const listEl = document.getElementById("modalHighlights");
    listEl.innerHTML = "";
    data.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });

    modal.classList.add("active");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Fitur Salin Email
const copyBtn = document.getElementById("copyEmailBtn");
const copyFeedback = document.getElementById("copyFeedback");

copyBtn.addEventListener("click", () => {
  const email = copyBtn.getAttribute("data-email");
  navigator.clipboard.writeText(email).then(() => {
    copyFeedback.textContent = "Alamat email berhasil disalin ke clipboard!";
    setTimeout(() => {
      copyFeedback.textContent = "";
    }, 3000);
  });
});

// Menu Responsif Mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});