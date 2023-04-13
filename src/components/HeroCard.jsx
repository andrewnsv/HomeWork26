import React, { useState } from "react";
import useFetchHeroes from "../hooks/useFetchHeroes";
import { nextHandler, prevHandler } from "../helpers/btnPrevNext";
import { Link } from "react-router-dom";

const HeroCard = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchHeroes(`character/?page=${page}`);

  return (
    <div className={"wrap"}>
      <div className={"hero-wrapper"}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.results.map((item, index) => {
              return (
                <div className={"card-hero"} key={index}>
                  <img alt={item.name} src={item.image}></img>
                  <p>{item.name}</p>
                  <p>{item.status}</p>
                  <p>{item.species}</p>
                  <Link to={`/heroes/hero/${item.id}`}>
                    <button className="details-card">Details</button>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="btn-wrapper">
        <button
          disabled={page === 1}
          onClick={() => prevHandler(page, setPage)}
        >
          Prev
        </button>
        <button
          disabled={page === data.info?.pages}
          onClick={() => nextHandler(page, setPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
