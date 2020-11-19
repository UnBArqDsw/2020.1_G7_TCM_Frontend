export const IsAuthenticated = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return true;
  }

  return false;
};
