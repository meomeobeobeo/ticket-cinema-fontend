import React, { memo, useEffect, useState } from "react";
import "./ChooseSlot.scss";
import swal from "sweetalert";
const Counter = () => {
  const [counter, setCounter] = useState(60 * 6);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      swal("Bạn đã chọn vé quá lâu! Ahihi", {
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [counter]);

  return <span className="time">{counter + "s"}</span>;
};

export default memo(Counter);
