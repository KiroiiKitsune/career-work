import { useState } from 'react';
import { apiSearch } from '../../api/apiSearch';

export const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = async () => {
    const { data, error } = await apiSearch(query);
    if (data) {
      setUsers(data.items);
      setError(null);
      data.items.forEach(async (user) => {
        const reposResponse = await fetch(user.repos_url);
        const reposData = await reposResponse.json();
        console.log(
          `Пользователь ${user.login} имеет ${reposData.length} репозиториев`,
        );
      });
    } else {
      setUsers([]);
      setError(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      apiSearch(query, setUsers, setError);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSort = async () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.public_repos - b.public_repos;
      } else {
        return b.public_repos - a.public_repos;
      }
    });

    
    for (const user of sortedUsers) {
      const reposResponse = await fetch(user.repos_url);
      const reposData = await reposResponse.json();
      user.repos = reposData;
    }

    setUsers([...sortedUsers]);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} disabled={query.length < 3}>
        Поиск
      </button>
      <div>Имя пользователя должно содержать 3 и более символа</div>
      <button onClick={handleSort}>Сортировать</button>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
