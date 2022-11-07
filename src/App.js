import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Login } from "./components";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    console.log(User);
    if (!User) navigate("/login");
  }, []);

  return (
    // <Routes>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
    //   <Route path="/" element={<Feed />}></Route>
    //   <Route path="/category/:categoryId" element={<Feed />}></Route>
    //   <Route
    //     path="/pin-detail/:pinId"
    //     element={<PinDetail user={user} />}
    //   ></Route>
    //   <Route path="/create-pin" element={<CreatePin user={user} />}></Route>
    //   <Route
    //     path="/search"
    //     element={
    //       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    //     }
    //   ></Route>

    //   <Route path="/user-profile/:userId" element={<UserProfile />}></Route>
    //   <Route
    //     path="/*"
    //     element={
    //       <Pins
    //         user={user && user}
    //         searchTerm={searchTerm}
    //         setSearchTerm={setSearchTerm}
    //       />
    //     }
    //   ></Route>
    // </Routes>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
