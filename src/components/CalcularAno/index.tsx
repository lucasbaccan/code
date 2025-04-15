export const CalcularAno = ({ ano, mes, dia }) => {
  const givenDate = new Date(ano, mes - 1, dia);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - givenDate.getFullYear();
  const monthDiff = currentDate.getMonth() - givenDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < givenDate.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export default CalcularAno;
