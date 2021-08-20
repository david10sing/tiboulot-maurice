import ProductsAPI from './products';

describe.only('Products API test suite', () => {
  it('should return an array of gas canisters', async () => {
    const productCollection = await ProductsAPI.gas.list();
    expect(productCollection.length).toBe(3);
  });
});
