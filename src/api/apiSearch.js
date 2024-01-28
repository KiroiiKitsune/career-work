export async function apiSearch(query) {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`,
      );
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
