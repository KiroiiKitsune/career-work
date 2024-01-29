export const getUserFollowers = async (queryFollowers) => {
    try {
      const response = await fetch(queryFollowers);
  
      if (response.status === 403) {
        throw new Error(
          'Вы не авторизованы. Нужно ждать смены IP-адреса. Попробуйте позже',
        );
      } else if (response.status === 503) {
        throw new Error('Сервер упал');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ошибка запроса. Что-то пошло не так. Попробуйте позже');
    }
  };