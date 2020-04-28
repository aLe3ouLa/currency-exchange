export const convert = (number) => {
  if (Number(number) === 0 || number === "") return "";
  const decimal = (number.toString().split(".")[1] || []).length;
  return decimal > 2 ? Number(number).toFixed(2) : number;
};

export const convertWithZero = (number) => {
  if (Number(number) === 0 || number === "") return "";
  const decimal = (number.toString().split(".")[1] || []).length;
  return decimal >= 0 ? Number(number).toFixed(2) : number;
};
