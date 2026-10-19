// import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>... is Loading</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
