import React from "react";
import useFetchEpisodes from "../hooks/useFetchEpisodes";
import { useParams } from "react-router-dom";

const EpisodesDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetchEpisodes(`character/${id}`);

  return (
    <>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
        {
          <div className="hero-details">
            <img alt={data.name} src={data.image} />
            <p><b>Name:</b> {data.name}</p>
            <p><b>Gender:</b> {data.gender}</p>
            <p><b>Created:</b> {data.created}</p>
            <p><b>Species:</b> {data.species}</p>
          </div>
        }
      </>
    )}
  </>
  )
}

export default EpisodesDetails