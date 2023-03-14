import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      productId: 1,
      productImgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgearopen.com%2Fwp-content%2Fuploads%2F2020%2F10%2FUntitled-103.png&f=1&nofb=1&ipt=50e130df620018f7368e3ccf0da597f8d898933078800a277b827f742259c50f&ipo=images",
      productDescription:
        "ACER NITRO 5 (AN515-57-90SF) GeForce RTX 3060 Graphics | Intel Core i9-11900H Processor | 15.6 inch Full HD (1920 x 1080) 144HZ IP Display | 16GB DDR4 RAM | 512GB SSD M.2 Storage | WIN 11 Home  Gaming Laptop | Shale Black",
      productPrice: "34,000",
    },
    {
      productId: 2,
      productImgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FMTIwMFgxNjAw%2Fz%2FuEcAAOSwT4JfUTwK%2F%24_57.JPG&f=1&nofb=1&ipt=a164f6f6220189662ea7e040251d566a7ad830caa9aeda77be63a1742755f88c&ipo=images",
      productDescription:
        "Asus ROG Strix G15 G513 2022 Model Gaming Laptop Ryzen 9 6900HX 15.6 16GB RAM 512GB SSD",
      productPrice: "85,555",
    },
    {
      productId: 3,
      productImgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mcsteve.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fgaming-1.jpg&f=1&nofb=1&ipt=945e311724f68028ac072db9ce93a0ab269d04d5ac35307f013266a2a2f7610f&ipo=images",
      productDescription:
        "HP Pavilion 15-ec2087AX (46R32PA) GeForce RTX 3050 Graphics | AMD R5 5600H Processor | 15.6 inch Full HD 144HZ IPS Display | 8GB DDR4 RAM Memory | 512GB SSD M.2 Storage | WIN 10 Home | MS Office Home & Student 2019 | Gaming Laptop | Shadow Black",
      productPrice: "46,990",
    },
  ],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;
