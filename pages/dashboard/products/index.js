import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import { useEffect, useState } from "react";
import slugify from "slugify";
import Image from "next/image";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import RichText from "@/components/RitchText/RichText";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import { useRef } from "react";
import DataTable from "react-data-table-component";
import { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";
import http from "utils/api";

// import tailwind modal
import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

// imports react pdf
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// style sheet for pdf
// const styles = StyleSheet.create({
//   doc: {
//     color: "#404B50",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   header: {
//     color: "#000",
//     fontWeight: "bold",
//     textAlign: "center",
//     textTransform: "uppercase",
//     marginVertical: "20px",
//   },
//   label: {
//     fontSize: "12px",
//     marginBottom: "6px",
//   },
//   input: {
//     fontSize: "13px",
//     color: "#000",
//   },
// });

function index() {
  const { productsQuery } = useContext(ProductsContext);

  const { data, isLoading, isError, refetch } = productsQuery;

  const inital = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    brand: "",
    unit: "pcs",
    slug: "",
  };

  const [product, setProduct] = useState(inital);

  // generate slug
  const genrerateSlug = (string) => {
    const slug = slugify(string, {
      lower: true, // Convert to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });

    setProduct({ ...product, slug });
  };

  useEffect(() => {
    genrerateSlug(product.name);
  }, [product.name]);

  // showing alert
  const { showAlert } = useSweetAlert();

  const [isFatching, setIsFatching] = useState(false);
  // loeadinit members
  const [products, setProducts] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data from an external API or database
  useEffect(() => {
    if (data) {
      setProducts(data);
      setFilteredProducts(data);

      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    const result = products?.filter((product) =>
      product.name.toLowerCase().match(search.toLowerCase())
    );

    setFilteredProducts(result);
  }, [search]);

  // table columns
  const columns = [
    {
      name: "Thumbnail",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Image
            src={row?.imgUrl}
            height={40}
            width={40}
            alt="img"
            className=" rounded-md"
          />
        </div>
      ),
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Cetegory",
      selector: (row) => row.category.name,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            value="Delete"
            className=" cursor-pointer  bg-red text-sm lowercase "
            onClick={() => handleDelete(row)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = async (data) => {
    showAlert({
      text: "Do you want to Delete?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (!result?.isConfirmed) return;

      const res = await http.httpDelete("/product", data._id);

      if (!res.ok) return;

      refetch();
      showAlert({
        icon: "success",
        title: "Status Successfully Deleted!",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#333",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F9FAFB",
        boxShadow: "none",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#374151",
        textTransform: "uppercase",
      },
    },
  };

  const formData = typeof window !== "undefined" ? new FormData() : "";

  const [thubmnail, setThubmnail] = useState(null);

  const inputFileRef = useRef(null);

  const form =
    typeof window !== "undefined" ? document.querySelector("form") : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("data", JSON.stringify(product));
    if (!thubmnail) return;

    formData.append(`files`, thubmnail, thubmnail.name);

    setIsFatching(true);

    const res = await http.httpPost(`/product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.ok) {
      setIsFatching(false);
      refetch();
      showAlert({
        icon: "success",
        title: "Product Added Successfully!",
        showConfirmButton: false,
        timer: 1000,
      });

      setProduct(inital);
      inputFileRef.current.value = null;
      //   // reset the form element
      form.reset();
    }
  };

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <Head>
        <title>Project</title>
      </Head>
      <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-6 justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div className=" grid grid-cols-1 mt-[6rem] 2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
          <div className="project__form mt-[2rem] 2xl:order-1  order-2">
            <Card className="w-full 2xl:w-96">
              <h4 className=" text-center font-bold  text-[1.5rem] uppercase">
                Add Product
              </h4>

              <form onSubmit={handleSubmit}>
                <CardBody className="text-center gap-6  grid grid-cols-1">
                  <Input
                    required
                    label="Name"
                    disabled={isFatching}
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />

                  <div>
                    <label
                      htmlFor="thmbnail "
                      className=" block text-left font-bold mb-3"
                    >
                      Thubmnail
                    </label>

                    <input
                      ref={inputFileRef}
                      required
                      disabled={isFatching}
                      name="thmbnail"
                      accept="image/jpeg, image/png"
                      type="file"
                      placeholder="Image"
                      className="flex justify-start "
                      onChange={(e) => setThubmnail(e.target.files[0])}
                    />
                  </div>

                  <div className=" overflow-hidden">
                    <p
                      htmlFor="my-textarea"
                      className="text-left font-bold mb-3"
                    >
                      Description
                    </p>

                    <RichText setProduct={setProduct} product={product} />
                  </div>

                  <Input
                    required
                    type="number"
                    disabled={isFatching}
                    label="Price"
                    className=" "
                    value={product.price}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: e.target.value,
                      })
                    }
                  />

                  <div>
                    <Select
                      label="Category"
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          category: e,
                        })
                      }
                    >
                      <Option value="645e3db7645f84f3b45b68ab">
                        deal of the day
                      </Option>
                      <Option value="645e3dd9645f84f3b45b68ad">
                        new collection
                      </Option>
                      <Option value="645e3dec645f84f3b45b68af">
                        disposable vape
                      </Option>
                    </Select>
                  </div>

                  <Input
                    required
                    disabled={isFatching}
                    label="Brand"
                    className=" "
                    value={product.brand}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        brand: e.target.value,
                      })
                    }
                  />

                  <Input
                    required
                    disabled={isFatching}
                    type="number"
                    label="Quantity"
                    className=" "
                    value={product.quantity}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        quantity: e.target.value,
                      })
                    }
                  />

                  <div>
                    <Select
                      label="Unit"
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          unit: e,
                        })
                      }
                    >
                      <Option value="kg">PCS</Option>
                      <Option value="liter">Litter</Option>
                      <Option value="kg">KG</Option>
                    </Select>
                  </div>

                  <Input
                    required
                    disabled={isFatching}
                    label="Slug"
                    value={product?.slug}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        slug: e.target.value,
                      })
                    }
                  />

                  <Button type="submit" size="md" disabled={isFatching}>
                    {isFatching ? (
                      <span className=" animate-ping">loading..</span>
                    ) : (
                      `   Add Product`
                    )}
                  </Button>
                </CardBody>
              </form>
            </Card>
          </div>

          <div className=" mr-10  2xl:col-span-2  2xl:order-2">
            <DataTable
              columns={columns}
              data={filteredProducts}
              // selectableRowsHighlight
              // highlightOnHover
              // selectableRows
              fixedHeader
              title="Products Table"
              subHeader
              subHeaderComponent={
                <div className="relative mb-6 mt-4  shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-[#6B7280] dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="   bg-[#F9FAFB] border  border-softGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              }
              customStyles={customStyles}
              subHeaderAlign="center"
              pagination
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
