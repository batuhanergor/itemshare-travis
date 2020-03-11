import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DatePicker = ({ value, onChange }) => (
  <div style={{ margin: "10px 0px" }}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        format="MM/dd/yyyy"
        variant="inline"
        value={value}
        onChange={onChange}
        label="Available Until"
      />
    </MuiPickersUtilsProvider>
  </div>
);

export default DatePicker;
