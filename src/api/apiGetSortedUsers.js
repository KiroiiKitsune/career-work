export const getSortedUsers = async ({ query, sortOrder }) => {
  const queryString = encodeURIComponent(
    `${query} in:login sort:repositories-${sortOrder}`,
  );
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);
    if (!response.ok) {
      throw new Error('Что-то пошло не так, попробуйте позже');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
