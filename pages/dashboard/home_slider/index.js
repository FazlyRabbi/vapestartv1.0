import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import { useEffect, useState } from "react";
import slugify from "slugify";
import Image from "next/image";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import DataTable from "react-data-table-component";

// import tailwind modal
import { Button, Card, CardBody, Chip } from "@material-tailwind/react";

function index() {
  // showing alert
  const { showAlert } = useSweetAlert();

  const [isFatching, setIsFatching] = useState(false);

  // loeadinit members
  const [products, setProducts] = useState([]);

  // Fetch data from an external API or database
  useEffect(() => {
    fetch(`${API_URL}/api/home-sliders?populate=*`, {
      method: "GET",
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // table columns
  const columns = [
    {
      name: "Thumbnails",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Image
            src={row?.attributes?.images?.data?.attributes.url}
            height={40}
            width={40}
            alt="img"
            className=" rounded-md"
          />
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            color="red"
            value="Delete"
            className=" cursor-pointer  lowercase "
            onClick={() => handleDelete(row)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (row) => {
    showAlert({
      title: "Do you want to Delete?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (!result?.isConfirmed) return;

      const res = await fetch(`${API_URL}/api/home-sliders/${row?.id}`, {
        method: "DELETE",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) return;

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

  const form =
    typeof window !== "undefined" ? document.querySelector("form") : "";

  const [iamge, setImages] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!iamge) return;

    formData.append(`files.images`, iamge[0], iamge[0].name);

    formData.append("data", JSON.stringify({}));

    setIsFatching(true);
    const res = await fetch(`${API_URL}/api/home-sliders`, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
      },

      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setIsFatching(false);
      showAlert({
        icon: "success",
        title: "Added Successfully!",
        showConfirmButton: false,
        timer: 1000,
      });
      // reset the form element
      form.reset();
    } else {
      setIsFatching(false);
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
      <div
        className="grid  gap-5 px-10 grid-cols-1
      
       lg:grid-cols-5
      
      justify-items-left p-[3rem] "
      >
        <LeftMenu />
        <DHeader />

        <div className=" lg:col-span-4     mt-[4rem]  ">
          <div className="project__form mt-[2rem] ">
            <Card className="w-full ">
              <h4 className=" text-center font-bold  text-[1.5rem] uppercase">
                Upload Home Sliders
              </h4>
              <form onSubmit={handleSubmit}>
                <CardBody className="text-center gap-6  grid grid-cols-1">
                  <div>
                    <p className=" text-left font-bold mb-3">Upload A Image</p>
                    <input
                      required
                      disabled={isFatching}
                      name="files"
                      accept="image/jpeg, image/png"
                      type="file"
                      placeholder="Image"
                      className="flex justify-start"
                      onChange={(e) => setImages(e.target.files)}
                    />
                  </div>

                  <Button type="submit" size="md" disabled={isFatching}>
                    {isFatching ? (
                      <span className=" animate-ping">uploading..</span>
                    ) : (
                      `   ADD SLIDER `
                    )}
                  </Button>
                </CardBody>
              </form>
            </Card>
          </div>
          <div className="mt-8">
            <DataTable
              columns={columns}
              data={products}
              fixedHeader
              title="Slider Table"
              subHeader
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
