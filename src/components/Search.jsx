import React from "react";
import { cn } from "../utils/cn";
import { useSearchBoxOpenStore } from "../store";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import useDebounce from "../custome hooks/useDebounce";
import { useSearch } from "../api";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const openSearchBox = useSearchBoxOpenStore((state) => state.openSearchBox);
  const setOpenSearchBox = useSearchBoxOpenStore(
    (state) => state.setOpenSearchBox,
  );

  const { register, watch } = useForm();

  const text = watch("search");

  const searchText = useDebounce(text, 500);

  const { data: searchResults } = useSearch(searchText, {
    enabled: !!searchText && openSearchBox && text !== undefined,
  });

  const handleClick = () => {
    setOpenSearchBox();
  };

  const nameToSlug = (name) => name.split(" ").join("-");

  const handleNavigateClick = (product) => () => {
    setOpenSearchBox();
    navigate(`/product/${nameToSlug(product.name)}/${product._id}`);
  };

  return (
    <div>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-200",
          openSearchBox ? "visible opacity-50" : "invisible opacity-0",
        )}
        onClick={handleClick}
      ></div>

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-auto w-full overflow-auto bg-neutral-50 shadow-lg transition-transform duration-300 ease-in-out",
          openSearchBox ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <X
          size={20}
          strokeWidth={1.9}
          className="absolute top-3 right-3 cursor-pointer md:top-5 md:right-5"
          onClick={handleClick}
        />
        <div className="flex h-full flex-col items-center justify-center gap-5 px-8 pt-10 pb-8 lg:pt-15 lg:pb-10">
          <h2 className="lg text-center text-lg text-gray-300 md:text-xl">
            What are you looking for in furnob?
          </h2>
          <input
            {...register("search", { required: true })}
            type="text"
            placeholder="Search..."
            className="mt-3 w-full border-b border-gray-300 px-2 py-1 text-center text-xl outline-0 placeholder:text-gray-300 md:mt-5 md:text-2xl"
          />
          <p className="text-sm font-light text-gray-400">
            please type the name of the product
          </p>
        </div>

        {searchResults && searchResults.length > 0 && (
          <div className="flex w-full flex-col gap-3 lg:gap-4 px-5 lg:px-10 pb-5">
            {searchResults.map((result) => (
              <div 
              onClick={handleNavigateClick(result)}
              className="item-center flex justify-center cursor-pointer">
                <div className="flex w-full items-center gap-2">
                  <img
                    src={result.images[0]}
                    alt={result.name}
                    className="h-5 w-5 lg:h-10 lg:w-10 object-cover"
                  />
                  <p className="text-sm w-[70%] truncate">{result.name}</p>
                </div>
                <div>
                  <p className="text-sm">${(result.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {searchResults && searchResults.length === 0 && (
          <div className="flex w-full flex-col gap-3 px-5 pb-5">
            <p className="text-sm">No results found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
