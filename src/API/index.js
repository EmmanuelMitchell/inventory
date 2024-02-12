export const getOrder = async () => {
  return await fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  // .then(console.log);
};

export const getRevenue = async () => {
  return await fetch("https://dummyjson.com/carts").then((res) => res.json());
  // .then(console.log);
};

export const getInventory = async () => {
  return await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  // .then(console.log);
};

export const getCustomer = async () => {
  return await fetch("https://dummyjson.com/users").then((res) => res.json());
  // .then(console.log);
};
