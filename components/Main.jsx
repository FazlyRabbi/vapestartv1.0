import Sidebar from "./Sidebar";

export default function Main({ children }) {
  return (
    <main className="main">
      <div className="container mx-auto px-2 grid grid-cols-1  justify-items-stretch   md:grid-cols-5  ">
        <div className="sidebar mt-4  hidden md:block">
          <Sidebar />
        </div>
        <div className="content  md:col-span-4 ">{children}</div>
      </div>
    </main>
  );
}
