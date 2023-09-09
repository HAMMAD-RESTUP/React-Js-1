import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Api() {
  const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  let clickCard = (id) => {
    navigate(`api/post/singlepost/${id}`);
  };
  return (
    <>
      
<div className="bg-white">
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <button onClick={getData}> view All</button>
 
  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {listData.map((x, i) => (
      <div  key={i} onClick={() => clickCard(x.id)}className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={x.image}
            alt="#"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 ">
              <a href="#" className="anchor" >
                <span aria-hidden="true" className="absolute inset-0" />
                {x.title}
              </a>
            </h3>
            <p className="mt-1 text-lg text-gray-500">{x.description}</p>
            <p className="mt-1 text-lg text-orange-500">Category: {x.category}</p>
        
          </div>
          <p className="text-xl font-medium text-green-600">${x.price}</p>
          
        </div>
      </div>
    ))}
  
  </div>
</div>
</div>
     
    </>
  );
}


export default Api;

