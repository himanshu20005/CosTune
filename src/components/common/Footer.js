import React from "react";
import StickyFooter from "react-sticky-footer";

function Footer() {
  return (
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: "#999999",
        padding: "2rem",
      }}
      stickyStyles={{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem",
      }}
    >
      Copyright
    </StickyFooter>
  );
}

export default Footer;
