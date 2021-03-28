import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; //main style file

import "react-date-range/dist/theme/default.css"; //theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <Button onClick={() => history.push("/search")}>Create Schedule</Button>
    </div>
  );
}

export default Search;
