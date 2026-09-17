import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Beranda",
    posts: "Artikel",
    tags: "Topik",
    about: "Tentang",
    archives: "Arsip",
    search: "Cari",
  },

  post: {
    publishedAt: "Dipublikasikan",
    updatedAt: "Diperbarui",
    sharePostIntro: "Bagikan artikel ini:",
    sharePostOn: "Bagikan artikel ini di {{platform}}",
    sharePostViaEmail: "Bagikan artikel ini melalui email",
    tagLabel: "Topik",
    backToTop: "Kembali ke atas",
    goBack: "Kembali",
    editPage: "Edit halaman",
    previousPost: "Artikel Sebelumnya",
    nextPost: "Artikel Berikutnya",
  },

  pagination: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    page: "Halaman",
  },

  home: {
    socialLinks: "Media Sosial",
    featured: "Artikel Pilihan",
    recentPosts: "Artikel Terbaru",
    allPosts: "Semua Artikel",
  },

  footer: {
    copyright: "Hak Cipta",
    allRightsReserved: "Hak cipta dilindungi.",
  },

  pages: {
    tagTitle: "Topik",
    tagDesc: "Artikel yang membahas topik",

    tagsTitle: "Topik",
    tagsDesc:
      "Jelajahi artikel Neraca berdasarkan topik ekonomi, keuangan, bisnis, dan literasi finansial.",

    postsTitle: "Artikel",
    postsDesc:
      "Baca artikel terbaru tentang ekonomi, keuangan, bisnis, dan literasi finansial dari Neraca.",

    archivesTitle: "Arsip",
    archivesDesc:
      "Jelajahi seluruh artikel Neraca berdasarkan tahun dan bulan.",

    searchTitle: "Cari",
    searchDesc: "Cari artikel tentang ekonomi, keuangan, bisnis, dan literasi finansial.",
  },

  a11y: {
    skipToContent: "Lewati ke konten",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    toggleTheme: "Ubah tema",
    searchPlaceholder: "Cari artikel...",
    noResults: "Artikel tidak ditemukan",
    goToPreviousPage: "Ke halaman sebelumnya",
    goToNextPage: "Ke halaman berikutnya",
  },

  notFound: {
    title: "404 - Halaman Tidak Ditemukan",
    message: "Halaman tidak ditemukan",
    goHome: "Kembali ke beranda",
  },
} satisfies UIStrings;
