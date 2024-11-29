import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import NotFound from "./pages/NotFound";
import Lab3Page from "./pages/Lab3Page";
import Lab4Page from "./pages/Lab4"


const menuItems = [
  { id: 1, label: "Home", url: "/home", urlPattern: "/home", element: <Home /> },
  { id: 2, label: "Lab1", url: "/lab1", urlPattern: "/lab1", element: <Lab1 /> },
  { id: 3, label: "Lab2", url: "/lab2/1", urlPattern: "/lab2/:id", element: <Lab2 /> },
  { id: 4, label: "Lab3", url: "/lab3", urlPattern: "/lab3", element: <Lab3Page /> },
  { id: 5, label: "NotFound", url: "*", urlPattern: "*", element: <NotFound /> },
  { id: 6, label: "Lab4", url: "/lab4", urlPattern: "/lab4", element: <Lab4Page /> },
];




function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        {/* Domyślne przekierowanie */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Dynamiczne generowanie tras */}
        {menuItems.map((item) => (
          <Route key={item.id} path={item.urlPattern} element={item.element} />
        ))}
      </Routes>
    </RootLayout>
  );
}

<Routes>
  <Route path="/" element={<Navigate to="/home" />} />
  {menuItems.map((item) => (
    <Route key={item.id} path={item.urlPattern} element={item.element} />
  ))}
</Routes>


export default App;
