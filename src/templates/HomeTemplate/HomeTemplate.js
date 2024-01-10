import { useEffect, useState } from "react";
import Loader from "component/Loader/Loader";
import Filter from "component/Filter/Filter";
import Navbar from "component/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "component/Footer/Footer";

export default function HomeTemplate() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container m-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            style={{
              position: "sticky",
              top: "0",
              zIndex: "30",
              backgroundColor: "white",
            }}
          >
            <Navbar></Navbar>
            <Filter></Filter>
          </div>
          <Outlet></Outlet>
          <Footer />
        </>
      )}
    </div>
  );
}
