import type { Show, Shows } from "./types";
const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

async function http<T>(path: string, options: RequestInit): Promise<T> {
  const _api_key = new URLSearchParams({
    api_key: API_KEY,
  });

  const request = new Request(`${path}&${_api_key}`, {
    ...options,
    headers: {
      Accept: "application/json",
    },
  });
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json().catch(() => ({}));
}

async function get<T>(path: string, options?: RequestInit): Promise<T> {
  const config = { method: "get", ...options };
  return await http<T>(path, config);
}

export function searchShows(query: string, page = 0): Promise<Shows> {
  const _query = new URLSearchParams({
    q: query,
    page: page as unknown as string,
  });

  return get<Shows>(`${baseUrl}/search/shows?${_query}`);
}

export function fetchShows(page = 0): Promise<Array<Show>> {
  const _page = new URLSearchParams({
    page: page as unknown as string,
  });

  return get<Array<Show>>(`${baseUrl}/shows?${_page}`);
}

export function fetchShow(id: string, embed?: string): Promise<Show> {
  const url = `${baseUrl}/shows/${id}`;

  if (embed) {
    const _embed = new URLSearchParams({
      embed: "cast",
    });

    return get<Show>(`${url}?${_embed}`);
  }

  return get<Show>(url);
}

export const query = {
  searchShows,
  fetchShows,
  fetchShow,
};
