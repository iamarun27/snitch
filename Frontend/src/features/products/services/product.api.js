import axios from "axios";

const productApiInstance = axios.create({
  baseURL: "/api/products",
  withCredentials: true,
});

export async function createProduct(formData) {
  const response = await productApiInstance.post("/", formData);

  return response.data;
}

export async function getSellerProduct() {
  const response = await productApiInstance.get("/seller");

  return response.data;
}

export async function getAllProducts() {
  const response = await productApiInstance.get("/");
  return response.data;
}

export async function getProductById(productId) {
  const response = await productApiInstance.get(`/detail/${productId}`);
  return response.data;
}

export async function addProductVariant(productId, newProductVariant) {

  console.log(newProductVariant)
  const formData = new FormData();

  newProductVariant.images.forEach((images) => {
    formData.append(`images`, images.file);
  });

  formData.append("Stock", newProductVariant.stock);
  formData.append("Price", newProductVariant.price);
  formData.append("attributes", JSON.parse(newProductVariant.attributes));

  const response = await productApiInstance.post(
    `/${productId}/variants`,
    formData,
  );
  return response.data;
}
