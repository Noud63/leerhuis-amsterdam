import React, { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { filteredExpiredActivities } from "../utils/filterByDate";

export const archiveLoader = () => {
  return filteredExpiredActivities;
};

const Archive2627 = () => {
  const data = useLoaderData();

  const archive2627 = data.slice(39, data.length);

  const archive_2627 = useMemo(
    () =>
      (archive2627 || [])
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    [archive2627],
  );

  return archive_2627;
};

export default Archive2627;
