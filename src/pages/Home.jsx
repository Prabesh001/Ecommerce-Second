import React from "react";

const Home = () => {
  const handleSave = () => {
    localStorage.setItem("name", "Prabesh");
  };

  const handleGet = () => {
    const name = localStorage.getItem("name");
    console.log(name);
  };

  const handleClear = () => {
    localStorage.removeItem("name");
  };

  const handleClearAll = () => {
    localStorage.clear();
  };
  return (
    <div>
      <h1>Home</h1>

      <div className="flex gap-2">
        <button onClick={handleSave}>Save Data</button>
        <button onClick={handleGet}>Get Data</button>
        <button onClick={handleClear}>Clear Data</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default Home;
