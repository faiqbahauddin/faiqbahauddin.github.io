import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Topics",
    about: "About",
    archives: "Archives",
    search: "Search",
  },

  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Topics",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },

  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },

  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
  },

  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },

  pages: {
    tagTitle: "Topic",
    tagDesc:
      "Explore Neraca articles by economic, financial, business, and financial literacy topics.",

    tagsTitle: "Topics",
    tagsDesc:
      "Explore articles from Neraca covering economics, finance, business, and financial literacy.",

    postsTitle: "Articles",
    postsDesc:
      "Read the latest articles on economics, finance, business, and financial literacy.",

    archivesTitle: "Archives",
    archivesDesc:
      "Explore Neraca articles by publication date.",

    searchTitle: "Search",
    searchDesc:
      "Search for articles about economics, finance, business, and financial literacy.",
  },

  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },

  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
