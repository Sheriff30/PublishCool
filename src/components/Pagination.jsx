import { useState, React } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Dropdown } from "primereact/dropdown";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Button from "./Button";

const itemsPerPage = 6;

const data = [
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "1",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "2",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "3",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "4",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "5",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "fantasy",
    id: "6",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "7",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "8",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "9",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "10",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "11",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "sci-fi",
    id: "12",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "13",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "14",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "15",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "16",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "17",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "education",
    id: "18",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "19",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "20",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "21",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "22",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "23",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae fugiat quo. Doloribus, soluta dolore? Ducimus, possimus amet.",
    category: "geography",
    id: "24",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Education", value: "education" },
  { label: "Geography", value: "geography" },
  { label: "Sci-Fi", value: "sci-fi" },
];

const App = () => {
  const [first, setFirst] = useState(0);
  const [filter, setFilter] = useState("all");

  const handlePageChange = (event) => {
    setFirst(event.first);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setFirst(0);
  };

  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => item.category.trim() === filter);

  const currentItems = filteredData.slice(first, first + itemsPerPage);

  return (
    <div className="bg-white grid gap-4 p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Recommended Journals</p>
        <div className="bg-grey py-1 px-2 flex gap-2 rounded-lg items-center justify-center text-primary font-semibold">
          <p>See All</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="card flex justify-content-center sm:hidden">
        <Dropdown
          value={filter}
          onChange={(e) => handleFilterChange(e.value)}
          options={filterOptions}
          placeholder="Select Category"
          className="w-full md:w-14rem border-primary border"
        />
      </div>
      <div className="filter-buttons hidden sm:flex gap-2 ">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={`py-1 px-2 rounded-lg ${
              filter === option.value ? "bg-primary text-white" : "bg-grey"
            }`}
            onClick={() => handleFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="items-container grid grid-cols-1 lg:grid-cols-2 gap-2">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="grid  grid-cols-1 grid-rows-[1fr_auto] border overflow-hidden cursor-pointer border-periwinkle rounded-lg hover:border-primary  gap-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <img
                  src="/assets/Dummy1.jpg"
                  alt="dummy photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 sm:p-0">
                <p>{item.name}</p>
                <div className="grid gap-2">
                  <div className="capitalize border-primary border w-fit py-1 px-2  text-primary rounded-lg">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full col-span-2 px-2 py-2 border-t-2">
              <p className="text-lg font-bold">$2000</p>
              <div className=" flex items-center gap-2">
                <Button variation="white">View Profile</Button>
                <Button variation="blue">Submit</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Paginator
        first={first}
        rows={itemsPerPage}
        totalRecords={filteredData.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
