import React, { useState } from "react";
import useFetchEpisodes from "../hooks/useFetchEpisodes";
import { nextHandler, prevHandler } from "../helpers/btnPrevNext";

const HeroEpisod = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchEpisodes(`episode/?page=${page}`);

  return (
    <div className={"episodes-wrapper"}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.results.map((item, index) => {
            return (
              <div className={"item-episod"} key={index}>
                <div className="number-item">
                  <p>{`${item.id}.`}</p>
                </div>
                <div className="info-item">
                  <p>
                    <b>Name: </b>
                    {item.name}
                  </p>
                  <p>
                    <b>Date: </b>
                    {item.air_date}
                  </p>
                  <p>
                    <b>Episod: </b>
                    {item.episode}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      )}
      <div className="btn-wrapper">
        <button
          disabled={page === 1}
          onClick={() => prevHandler(page, setPage)}
        >
          prev
        </button>
        <button
          disabled={page === data.info?.pages}
          onClick={() => nextHandler(page, setPage)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default HeroEpisod;
