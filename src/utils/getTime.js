export default time => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}  | ${date.getFullYear()} / ${date.getMonth() +
    1} / ${date.getDate()} `;
};
