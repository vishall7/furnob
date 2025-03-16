export const categories = [
    {id: 1, name: "living room", product: 12},
    {id: 2, name: "bedroom", product: 12},
    {id: 3, name: "bathroom", product: 9},
    {id: 4, name: "kitchen", product: 14},
    {id: 5, name: "lightning", product: 7},
    {id: 6, name: "home Office", product: 2},
    {id: 7, name: "outdoor", product: 5},
    {id: 8, name: "nursery & Kids", product: 28},
    {id: 9, name: "dining table", product: 12},
    {id: 10, name: "home decorations", product: 10},
]


export const filterCategories = [
    {id: 1, name: "living room", subCategories: ["living room", "bedroom", "bathroom", "lightning", "home Office"]},
    {id: 2, name: "bedroom", subCategories: []},
    {id: 3, name: "bathroom", subCategories: ["living room" ]},
    {id: 4, name: "kitchen", subCategories: [ "lightning", "home Office"]},
    {id: 5, name: "lightning", subCategories: []},
    {id: 6, name: "home Office", subCategories: ["living room"]},
    {id: 7, name: "outdoor", subCategories: []},
    {id: 8, name: "nursery & Kids", subCategories: ["lightning", "home Office"]},
    {id: 9, name: "dining table", subCategories: []},
    {id: 10, name: "home decorations", subCategories: ["living room", "bedroom", "bathroom", "lightning", "home Office"]},
]


{/* <div className="relative flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="category"
            id="category"
            className="cursor-pointer"
          />
          <label htmlFor="category" className="cursor-pointer text-sm">
            Decoration
          </label>
        </div>
        <ChevronDown
          size={16}
          strokeWidth={1.3}
          className={cn(
            "cursor-pointer transition-all duration-300",
            isOpen && "rotate-180",
          )}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={cn(
            "invisible absolute top-6 left-2 flex w-full -translate-y-2 flex-col gap-2 px-3 py-1 opacity-0 transition-all duration-300",
            isOpen && "visible translate-y-0 opacity-100",
          )}
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="category"
              id="category"
              className="cursor-pointer"
            />
            <label htmlFor="category" className="cursor-pointer text-sm">
              Furniture
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="category"
              id="category"
              className="cursor-pointer"
            />
            <label htmlFor="category" className="cursor-pointer text-sm">
              Lighting
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="category"
              id="category"
              className="cursor-pointer"
            />
            <label htmlFor="category" className="cursor-pointer text-sm">
              Office
            </label>
          </div>
        </div>
      </div> */}