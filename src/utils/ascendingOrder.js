export const ascendingOrder = (archive) => {
  const order = archive.sort(
    (a, b) => new Date(a.starting_date) - new Date(b.starting_date)
  );
  return order;
};
