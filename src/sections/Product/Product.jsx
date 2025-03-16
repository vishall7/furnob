import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import ImageGallery from "./ImageGallery";
import { useSingleProduct } from "../../api";
import Spinner from "../../components/Spinner";
import { Stars } from "../../components/Card";
import Seperator from "../../components/Seperator";
import ShareIcons from "./ShareIcons";
import { cn } from "../../utils/cn";
import Button from "../../components/Button";
import { Minus, Plus } from "lucide-react";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prev) => prev - 1);
  const increment = () => setQuantity((prev) => prev + 1);

  return (
    <div className="flex w-30 items-center justify-between gap-5 rounded border border-gray-300 px-3 py-2">
      <Minus
        onClick={decrement}
        size={16}
        stroke="#000"
        strokeWidth={2}
        className="scale-90"
      />
      {quantity}{" "}
      <Plus
        onClick={increment}
        size={16}
        stroke="#000"
        strokeWidth={2}
        className="scale-90"
      />
    </div>
  );
}

function Product() {
  const { slug, productId } = useParams();
  const { data: product, isLoading } = useSingleProduct(productId);
  console.log("product rendered");

  const discountedPrice = () =>
    (product.price - product.discount).toFixed(2) || product.price;

  const { firstPart, secondPart } = useMemo(() => {
    const description = product?.longDescription || "";
    const midIndex = Math.ceil(description.length / 2);
    const splitIndex = description.lastIndexOf(".", midIndex) + 1 || midIndex;

    const firstPart = description.slice(0, splitIndex).trim();
    const secondPart = description.slice(splitIndex).trim();

    return { firstPart, secondPart };
  }, [product?.longDescription]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Container className={"lg:px-auto md:px-10"}>
      <div className="flex w-full flex-col justify-between gap-5 py-10 md:flex-row md:justify-between md:gap-6 lg:gap-14 lg:py-15">
        <div className="w-full md:w-1/2 lg:w-[48%]">
          <ImageGallery images={product?.images} discount={product?.discount} />
        </div>

        <div className="flex w-full flex-col gap-4 md:w-1/2 lg:w-[52%]">
          <h1 className="text-2xl/7 font-semibold lg:text-4xl/10">
            {product?.name}
          </h1>

          <div className="flex items-center gap-5">
            <Stars stars={product?.ratings || 0} />
            <span
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize",
                product?.status === "in stock"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 h-[5px] w-[5px] rounded-full",
                  product?.status === "in stock"
                    ? "bg-green-500"
                    : "bg-red-500",
                )}
              />
              {product?.status}
            </span>
          </div>

          <p className="text-sm text-neutral-500 lg:text-base">
            {product?.shortDescription}
          </p>

          <Seperator className={"mb-2"} />

          <div className="flex items-baseline gap-2 lg:mt-2 lg:gap-3">
            <span className="text-xl font-semibold text-amber-600 lg:text-3xl">
              ${discountedPrice()}
            </span>
            <span className="text-neutral-400 line-through lg:text-2xl">
              ${product?.price}.00
            </span>
          </div>

          <div className="my-3 flex items-center gap-5">
            <QuantitySelector />
            <Button className={"w-full px-8 md:w-auto"} variant={"primary"}>
              Add to Cart
            </Button>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutral-400">
              Categories:{" "}
              <span className="font-medium text-black capitalize">
                {product?.categories.map((cat) => cat.name).join(", ")}
              </span>
            </span>
            <span className="text-sm text-neutral-400">
              Tags:{" "}
              <span className="font-medium text-black capitalize">
                {product?.tags.join(", ")}
              </span>
            </span>
          </div>

          <ShareIcons />
        </div>
      </div>
      {/* discription */}
      <div className="pt-5 pb-10 md:pt-2 lg:pt-0">
        <h3 className="text-xl font-medium">Description</h3>
        <Seperator className="my-5" />
        <p className="mb-4 text-base">{firstPart}</p>
        <p className="text-base">{secondPart}</p>
      </div>
    </Container>
  );
}

export default Product;
