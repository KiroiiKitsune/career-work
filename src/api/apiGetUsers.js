export async function getUsers(query) {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`,
      );
      const dataUsers = await response.json();
      return { dataUsers, error: null };
    } catch (error) {
      return { dataUsers: null, error };
    }
  }
