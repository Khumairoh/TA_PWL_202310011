import React from "react";

export default function Footers() {
  return (
    <footer
      style={{ marginTop: "110rem", textAlign: "center" }}
      className="container"
    >
      <p
        style={{
          fontWeight: "600",
          fontFamily: "Lato",
        }}
      >
        &copy; 2023 Khumairah Silviani &middot;
        <a
          href="https://www.briliofood.net/resep/30-resep-masakan-menu-harian-ramadhan-paling-simpel-enak-sederhana-dan-mudah-ditiru-2303198.html"
          className="ms-1"
          target={"_blank"}
        >
          Cuki
        </a>
      </p>
    </footer>
  );
}
