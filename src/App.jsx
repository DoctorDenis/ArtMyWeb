import { Navigate, Route, Routes } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import EditFormComponent from "./components/EditFormComponent";
import { ToastContainer } from "react-toastify";

import LayoutWrapper from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route
          path="/users"
          element={
            <LayoutWrapper>
              <TableComponent />
            </LayoutWrapper>
          }
        ></Route>
        <Route
          path="/edit"
          element={
            <LayoutWrapper>
              <EditFormComponent />
            </LayoutWrapper>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/users" />}></Route>
      </Routes>
    </>
  );
}

export default App;
