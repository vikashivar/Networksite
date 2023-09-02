import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Footer from "../home/homefile/footer";

function Termofuse() {
  const object1 = [
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una",

    "Galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500",

    'Años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',

    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una",

    "Galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500",

    'Años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
  ];
  return (
    <div>
      <Aboutheader1
        aboutbackground="linear-gradient(273deg, rgba(255, 244, 215, 0.70) -2.7%, rgba(195, 234, 255, 0.60) 81.17%)"
        comheader1={<Comheader1></Comheader1>}
        title="Terms of Use"
        detail={
          <span
            className="relleno px-5"
            style={{
              color: "#393939",
              textAlign: "center",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
              marginTop: "3rem",
              display: "inline-block",
            }}
          >
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno
          </span>
        }
      ></Aboutheader1>
      <div style={{ marginTop: "4rem" }} className="mx-5">
        <div>
          <label
            htmlFor="selectc"
            style={{
              color: "#000",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Select Country
          </label>
          <select id="delectc" className="ms-4">
            <option disabled value="">
              Select Country
            </option>
            <option value="india">India</option>
            <option value="chaina">Chaina</option>
            <option value="england">England</option>
            <option value="korea">Korea</option>
          </select>
        </div>
        <div
          className="mt-4"
          style={{
            color: "#4e59e7",
            fontFamily: "geomanist,sans-serif",
            fontSize: "2.5rem",
            fontWeight: "700",
          }}
        >
          Verified Networks{" "}
          <span
            style={{
              color: "#393939",
              fontFamily: "geomanist,sans-serif",
              fontSize: "2.5rem",
              fontWeight: "700",
            }}
          >
            Terms of Use
          </span>
        </div>
        <div
          className="mt-2"
          style={{
            color: "#393939",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Lorem Ipsum es simplemete.
        </div>
      </div>
      <div className="mx-5 mt-5">
        {object1.map((a, b) => {
          return (
            <div
              className="mt-4"
              key={b}
              style={{
                color: "#8f8f98",
                fontFamily: "geomanist,sans-serif",
                fontSize: "1.125rem",
                fontWeight: "400",
              }}
            >
              {a}
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Termofuse;
