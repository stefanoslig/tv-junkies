import { createRouter, createWebHistory } from "vue-router";
import TvShowsView from "../views/TvShows.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "tv-shows",
    },
    {
      path: "/tv-shows",
      name: "tv-shows",
      component: TvShowsView,
    },
    {
      path: "/tv-shows/:id",
      name: "tv-show-details",
      component: () => import("../views/TvShowDetails.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchShow.vue"),
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: () => import("../views/BookmarkedShows.vue"),
    },
  ],
});

export default router;
