import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import slugify from "slugify";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import { TiDeleteOutline } from "react-icons/ti";

// import tailwind modal
import {
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";

// imports react pdf
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// style sheet for pdf
const styles = StyleSheet.create({
  doc: {
    color: "#404B50",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginVertical: "20px",
  },
  label: {
    fontSize: "12px",
    marginBottom: "6px",
  },
  input: {
    fontSize: "13px",
    color: "#000",
  },
});

function index() {
  // showing alert
  const { showAlert } = useSweetAlert();

  // loead init members
  const [orders, setOrders] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filteredOrder, setFilteredOrder] = useState([]);
  //  set single Data
  const [singleData, setSingleData] = useState("");

  // membershiip pdf
  const MembersPdf = () => (
    <Document>
      <Page size={"A4"} style={styles.doc}>
        <Text style={styles.header} fixed>
          {singleData.FirstName && singleData.FirstName}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              Title
            </Text>
            <Text style={styles.input} fixed>
              {singleData.Title && singleData.Title}
            </Text>
          </View>

          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              LastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.LastName && singleData.LastName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              MiddleName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.MiddleName && singleData.MiddleName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FamilyLastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FamilyLastName && singleData.FamilyLastName}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  // csv headers
  const headers = [
    { label: "ID", key: "id" },
    { label: "Title", key: "attributes.Title" },
    { label: "Country", key: "attributes.Country" },
    { label: "Slug", key: "attributes.Slug" },
    { label: "ProjectDescription", key: "attributes.ProjectDescription" },
    { label: "KushInvolment", key: "attributes.KushInvolment" },
    { label: "RegistrationId", key: "attributes.RegistrationId" },
    { label: "ProjectCategorie", key: "attributes.ProjectCategorie" },
    { label: "Bradcamp", key: "attributes.Bradcamp" },
    { label: "Name", key: "attributes.Replay.Name" },
    { label: "Email", key: "attributes.Replay.Email" },
    { label: "Phone", key: "attributes.Replay.Phone" },
  ];

  // Fetch data from an external API or database
  useEffect(() => {
    fetch(
      `${API_URL}/api/orders?populate[products][populate]=*&populate[Shipping][populate]=*&populate[Billing][populate]=*&populate[orderInfo][populate]=*`,
      {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data?.data);
        setFilteredOrder(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const result = orders?.filter((order) =>
      order.attributes.Billing.firstName
        .toLowerCase()
        .match(search.toLowerCase())
    );
    setFilteredOrder(result);
  }, [search]);

  // all functionalitys
  const [downloadDialog, setDownloadDialog] = useState(false);
  const [downloads, setDownload] = useState([]);

  const dwonloadFile = (e) => {
    setDownloadDialog(!downloadDialog);
    setDownload(e);
  };

  const finalDownload = (data) => {
    const downloadLink = document.createElement("a");
    downloadLink.target = "_blank";
    // Set the href and download attributes on the download link
    downloadLink.href = data.url;
    downloadLink.download = data.name;
    downloadLink.click();
  };

  // handle status change

  const handleStatus = async (action, data) => {
    showAlert({
      text: "Do you want to save the changes?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (!result?.isConfirmed) return;

      const newData = { ...data?.attributes?.orderInfo, status: action };

      const res = await fetch(
        `${API_URL}/api/orders/${data?.id}?populate[orderInfo][populate]=*`,
        {
          method: "PUT",
          headers: {
            Authorization: API_TOKEN,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              orderInfo: newData,
            },
          }),
        }
      );

      if (!res.ok) return;

      showAlert({
        icon: "success",
        text: "Status Successfully Changed!",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };

  const handleDelete = async (data) => {
    showAlert({
      text: "Do you want to Delete?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (!result?.isConfirmed) return;

      const res = await fetch(`${API_URL}/api/orders/${data?.id}`, {
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

  // table columns
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.attributes.orderInfo.orderId,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.attributes.Billing.firstName,
      sortable: true,
    },
    {
      name: "Product Details",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            value="Show"
            color="green"
            className=" cursor-pointer  lowercase "
            onClick={() => handleShowProduct(row.attributes)}
          />
        </div>
      ),
    },
    {
      name: "Delevary Price",
      selector: (row) => `${row.attributes.orderInfo.price}$`,
      sortable: true,
    },
    {
      name: "Files",
      cell: (row) => (
        <Chip
          className=" cursor-pointer"
          value="Show"
          onClick={() => {
            dwonloadFile(row);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
            </svg>
          }
        ></Chip>
      ),
    },
    // {
    //   name: "Client Secret",
    //   selector: (row) => row.attributes.orderInfo.paymentInfo,

    // },
    {
      name: "Actions",
      cell: (row) => (
        <select
          required
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          onChange={(status) => handleStatus(status.target.value, row)}
        >
          <option defaultChecked>Meaking</option>
          <option>On Way</option>
          <option>Shipped</option>
        </select>
      ),
      selector: "selected",
      sortable: false,
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

  // add products related task

  const genrerateSlug = (string) => {
    const slug = slugify(string, {
      lower: true, // Convert to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });
    setProjectForm({ ...projectForm, Slug: slug });
  };

  // useEffect(() => {
  //   genrerateSlug(projectForm.Title);
  // }, [projectForm?.Title]);

  const formData = typeof window !== "undefined" ? new FormData() : "";

  // const { showAlert } = useSweetAlert();

  // const [isFatching, setIsFatching] = useState(false);

  // const addProjects = async () => {
  //   try {
  //     setIsFatching(true);
  //     const res = await fetch(`${API_URL}/api/projects`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: API_TOKEN,
  //       },

  //       body: formData,
  //     });

  //     const data = await res.json();
  //     if (!res.ok) return;
  //     showAlerts();
  //     setIsFatching(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // genrerateSlug(projectForm.Title);
    // formData.append(`files.Thubmnail`, thubmnail, thubmnail.name);
    // formData.append("data", JSON.stringify(projectForm));
    // addProjects();
    // setThubmnail(null);
    // setProjectForm(projectIninitalForm);
  };

  // show products

  const [showProduct, setShowProduct] = useState(false);

  const handleShowProduct = (data) => {
    setSingleData(data);
    setShowProduct(true);
  };

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-6 justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div className=" grid grid-cols-1 mt-[6rem] 2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
          <div className=" mr-10  2xl:col-span-3  2xl:order-2">
            <DataTable
              columns={columns}
              data={filteredOrder}
              // selectableRowsHighlight
              // highlightOnHover
              // selectableRows
              fixedHeader
              title="Orders Table"
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
              actions={
                <div className="flex justify-between mb-4 items-center space-x-2">
                  <CSVLink
                    data={orders}
                    headers={headers}
                    filename={"Invest-data.csv"}
                  >
                    <Chip
                      value="Download"
                      className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                    />
                  </CSVLink>

                  <CSVLink
                    data={orders}
                    headers={headers}
                    filename={"Volunteers-data.csv"}
                  >
                    <Chip
                      color="amber"
                      value=" Download CSV"
                      className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                    />
                  </CSVLink>

                  <Chip
                    color="indigo"
                    value="Pdf"
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                  />

                  <Chip
                    color="purple"
                    value="Share"
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                  />
                </div>
              }
            />
          </div>
        </div>

        {/* // tailwind modal  */}

        {/* Dialog for dowload files */}
        <Dialog open={downloadDialog}>
          <DialogHeader className="  flex justify-end">
            <TiDeleteOutline
              className=" text-[1.5rem]   cursor-pointer"
              onClick={() => setDownloadDialog(false)}
            />
          </DialogHeader>

          <DialogBody>
            <div
              className="grid grid-cols-1  max-h-[80vh]   
            overflow-y-auto 
           
            
            2xl:overflow-visible  gap-5 
          "
            >
              {downloads?.attributes?.products.map((product, index) => (
                <div
                  key={index}
                  className="mr-2 lg:mr-0   justify-items-center 
               items-center
             grid grid-cols-1 xl:grid-cols-2 gap-2 gap-y-5"
                >
                  <div>
                    <p className="font-bold text-black">{product.title}</p>
                    <Image
                      src={product.imgUrl}
                      width="200"
                      height="200"
                      alt="product_image"
                      className=" max-w-[10rem] max-h-[10rem] rounded-md place-content-center"
                    />
                  </div>

                  <Chip
                    onClick={() => finalDownload(product.file?.data.attributes)}
                    value="Dwonlod"
                    className=" cursor-pointer  block  capitalize shadow-md active:shadow-sm  text-sm  max-w-[5rem] "
                  />
                </div>
              ))}
            </div>
          </DialogBody>
        </Dialog>

        <Dialog open={showProduct}>
          <DialogHeader className="  flex justify-end">
            <TiDeleteOutline
              className=" text-[1.5rem]   cursor-pointer"
              onClick={() => setShowProduct(false)}
            />
          </DialogHeader>

          <DialogBody>
            <div
              className="grid grid-cols-1 max-h-[80vh]   
            overflow-y-auto 
            justify-items-center
            gap-8 
          "
            >
              {singleData?.products?.map((product, index) => (
                <div
                  key={index}
                  className="
                  
                  gap-2 
                
                   bg-blue-gray-50 shadow-md  p-3 py-4 rounded-sm
                  justify-items-center
                grid grid-cols-1"
                >
                  <Image
                    src={product.imgUrl}
                    alt="img"
                    height={100}
                    width={100}
                  />

                  <h1>
                    Title:
                    <span className="font-bold text-black">
                      {" "}
                      {product.title}
                    </span>
                  </h1>
                  <h1>
                    JobName:
                    <span className="font-bold text-black">
                      {" "}
                      {product.jobName}
                    </span>
                  </h1>
                  <h1>
                    Width_Length:
                    <span className="font-bold text-black">
                      {product.width_length}
                    </span>
                  </h1>

                  <h1>
                    Color:
                    <span className="font-bold text-black">
                      {product.color}
                    </span>
                  </h1>

                  <h1>
                    Lamination:
                    <span className="font-bold text-black">
                      {" "}
                      {product.lamination}
                    </span>
                  </h1>

                  <h1>
                    Material:
                    <span className="font-bold text-black">
                      {product.material}
                    </span>
                  </h1>

                  <h1>
                    Production Time:
                    <span className="font-bold text-black">
                      {product.production_time}
                    </span>
                  </h1>

                  <h1>
                    Quantity:
                    <span className="font-bold text-black">
                      {product.quantity}
                    </span>
                  </h1>
                  <h1>
                    Reinforce:
                    <span className="font-bold text-black">
                      {" "}
                      {product.reinforce}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
          </DialogBody>
        </Dialog>
        {/* Dialog for dowload files */}
        {/* <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="  flex justify-between">
            {" "}
            <p className="text-[1.3rem]">
              {singleData.FirstName && singleData.FirstName}
            </p>
            <PDFDownloadLink
              document={<MembersPdf />}
              fileName={`${singleData.FirstName}`}
            >
              {({ loading }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <Chip
                    value="Dwonlod Pdf "
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm  text-sm  "
                  />
                )
              }
            </PDFDownloadLink>
            <TiDeleteOutline
              className=" text-[1.5rem] cursor-pointer"
              onClick={handleOpen}
            />
          </DialogHeader>

          <DialogBody>
            <div
              className="grid grid-cols-1 max-h-[80vh]   
            overflow-y-auto 
            xl:grid-cols-2
            
            2xl:overflow-visible  gap-5 2xl:grid-cols-3
          "
            >
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Title
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Title && singleData.Title}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Country
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Country && singleData.Country}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Country
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.KushInvolment && singleData.KushInvolment}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  KushInvolment
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.KushInvolment && singleData.KushInvolment}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  ProjectCategorie
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.ProjectCategorie && singleData.ProjectCategorie
                  }
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  ProjectDescription
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.ProjectDescription &&
                    singleData.ProjectDescription
                  }
                  disabled
                />
              </div>
            </div>
          </DialogBody>
        </Dialog> */}
      </div>
    </>
  );
}

export default index;
