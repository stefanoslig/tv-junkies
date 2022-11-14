import { defineStore } from "pinia";
import type { Show } from "@/api/types";

interface State {
  bookmarkedShows: Array<Show>;
}

export const usebookmarksStore = defineStore({
  id: "bookmarks",
  state: (): State => ({
    bookmarkedShows: [],
  }),
  getters: {
    isShowBookmarked: (state) => {
      return (id: number): boolean =>
        state.bookmarkedShows.findIndex((show) => show.id === id) > -1;
    },
  },
  actions: {
    addBookmark(show: Show) {
      this.bookmarkedShows.push(show);
    },

    removeBookmark(id: number) {
      const i = this.bookmarkedShows.findIndex((show) => id === show.id);
      if (i > -1) this.bookmarkedShows.splice(i, 1);
    },
  },
});
