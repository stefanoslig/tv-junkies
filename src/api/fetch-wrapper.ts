import type { Show, Shows } from "./types";

const baseUrl = import.meta.env.VITE_MOVIES_API_URL;

async function http<T>(path: string, options: RequestInit): Promise<T> {
  const request = new Request(path, {
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

export function fetchShows(query: string): Promise<Shows> {
  const _query = new URLSearchParams({
    q: query,
  });

  return get<Shows>(`${baseUrl}/search/shows?${_query}`);
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
  fetchShows,
  fetchShow,
};
