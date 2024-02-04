import Client from "./node_modules/shopify-buy/index.js";

const client = Client.buildClient({
  storefrontAccessToken: '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',
  domain: '831d21-3.myshopify.com',
});

client.product.fetchAll().then(products => {
  console.log(products);
});
