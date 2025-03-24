export const CurrentAge = () => {
  const birthDate = new Date(1995, 9, 30);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export default CurrentAge;
