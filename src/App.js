import React, { useEffect, useState } from "react";
import Form from "./components/form";
import Table from "./components/table";
import SortBtn from "./components/sortBtn";
import Search from "./components/serach";
import { v4 as uuidv4 } from "uuid";

var initialValues = {
  gamename: "",
  gameauthor: "",
  gametag: "",
  gamerating: "",
  gamedesc: "",
  gameprice: "",
  forkids: false,
};

function App() {
  const [data, setData] = useState();
  const [text, setText] = useState(initialValues);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getData("gamename");
  }, []);

  //get data
  const getData = (value) => {
    fetch(
      `http://localhost:3001/games?_sort=${value}&_order=${
      value == "gamerating" ? "desc" : "asc"
      }`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const handleClick = (sortBy) => {
    getData(sortBy);
  };

  const handlePriceSort = () => {
    setData((datas) => {
      return [...datas.sort((a,b)=>{
        return +b.gameprice -  +a.gameprice
      })]
    })
  }

  //post data
  const postData = (d) => {
    fetch("http://localhost:3001/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d),
    })
      .then((res) => res.json)
      .then((res) => getData("gamename"));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...text,
      id: uuidv4(),
    };
    postData(payload);
    setText(initialValues);
    data.forkids = false;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setKeyword(e.target.value.toLowerCase());
  };

  const searched = (keyword) => (d) =>
    d.gamename.toLowerCase().includes(keyword);
  return (
    <div className="container">
      <h1 className="text-center text-primary my-3">
        Game storage Mangement App
      </h1>
      <div className="container justify-content-md-center w-75 my-5">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          text={text}
        />
      </div>
      <div className="container justify-content-md-center w-50 my-5">
        <Search keyword={keyword} handleSearch={handleSearch} />
      </div>
      <div className="container justify-content-md-center w-100 my-5">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <span>
                <th scope="col">Name</th>
                <SortBtn handleClick={handleClick} sortByValue="gamename" />
              </span>
              <th scope="col">Tag Name</th>
              <th scope="col">Author</th>
              <span>
                <th scope="col">Price</th>
                <SortBtn handleClick={handlePriceSort}  />
              </span>
              <th scope="col">Description</th>
              <th scope="col">For Kids</th>
              <span>
                <th scope="col">Rating</th>
                <SortBtn handleClick={handleClick} sortByValue="gamerating" />
              </span>
            </tr>
          </thead>

          <Table data={data} searched={searched} keyword={keyword} />
        </table>
      </div>
    </div>
  );
}

export default App;
