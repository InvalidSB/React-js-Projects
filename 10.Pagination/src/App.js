import { useState } from "react";
import "./App.css";
import { UserData } from "./UserData";

import ReactPaginate from 'react-paginate'

function App() {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const DisplayPage = UserData.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((user) => {
    return (
      <h1
        style={{
          height: 200,
          backgroundColor: "red",
          textAlign: "center",
          justifyContent: "center",
          margin: 50,
          width: 300,
          alignItems: "center",
          display: "flex",
        }}
      >
        {user.name}
      </h1>
    );
  });


  const pageCount = Math.ceil(UserData.length / usersPerPage)
   const changePage=({selected})=>{
      setPageNumber(selected)
   }
   console.log(pageCount)
  return <div className="App">
   

    {DisplayPage}
    <ReactPaginate 
    previousLabel ={"Previous"}
    nextLabel={"Next"}
    pageCount ={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={'previousBttn'}
    nextLinkClassName={"nextBttn"}
    disableClassName={'paginationDisble'}
    activeClassName={"paginationActive"}
    />
    </div>;
}

export default App;
