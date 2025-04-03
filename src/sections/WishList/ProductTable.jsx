import React from "react";

const ProductTable = ({ products }) => {
  const discountedPrice = (price, discount) =>
    (price - discount).toFixed(2) || price;
  const dateFormat = (date) => new Date(date).toLocaleDateString();

  return (
    <div className="max-h-[400px] w-full overflow-auto">
      <div className="w-full min-w-[600px]">
        <table className="w-full border-collapse border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-3"></th>
              <th className="border border-gray-300 p-3 font-semibold">
                Product
              </th>
              <th className="hidden border border-gray-300 p-3 sm:table-cell">
                Unit Price
              </th>
              <th className="hidden border border-gray-300 p-3 font-semibold md:table-cell">
                Date Added
              </th>
              <th className="border border-gray-300 p-3 font-semibold">
                Stock
              </th>
              <th className="border border-gray-300 p-3 text-center font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id} className="bg-white odd:bg-gray-50">
                <td className="p-3 text-center">
                  <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                </td>
                <td className="relative flex flex-col items-center gap-3 p-3 sm:flex-row">                  
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="h-12 w-12 object-cover"
                  />
                  {product.name}
                </td>
                <td className="hidden p-3 sm:table-cell">
                  <s className="text-gray-400">${product.price}</s>
                  <span className="ml-2 text-green-500">
                    ${discountedPrice(product.price, product.discount)}
                  </span>
                </td>
                <td className="hidden p-3 md:table-cell">
                  {dateFormat(product.createdAt)}
                </td>
                <td className="p-3 capitalize">{`✔ ${product.status}`}</td>
                <td className="text-center">
                  <button className="w-[80%] cursor-pointer rounded border border-teal-600 px-4 py-2 text-teal-600 transition hover:bg-teal-600 hover:text-white">
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
