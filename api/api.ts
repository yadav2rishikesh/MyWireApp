const BASE_URL = 'http://10.0.2.2:3000'; // Android emulator localhost

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const sendCart = async (cart: any[]) => {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
