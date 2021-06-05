import React from "react";

function Foooter() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Foooter;
