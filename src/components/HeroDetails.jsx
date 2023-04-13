import React from "react";
import useFetchHeroes from "../hooks/useFetchHeroes";
import { useParams } from "react-router-dom";

const HeroDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetchHeroes(`character/${id}`);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {
            <div className="hero-details">
              <img alt={data.name} src={data.image} />
              <p><b>Name:</b> {data.name}</p>
              <p><b>Gender:</b> {data.gender}</p>
              <p><b>Status:</b> {data.status}</p>
              <p><b>Species:</b> {data.species}</p>
              <p><b>Created:</b> {data.created}</p>
            </div>
          }
        </>
      )}
    </div>
  );
};

export default HeroDetails;
