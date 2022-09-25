import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
  const navigate = useNavigate();

  return (
    <MDBContainer>
    <MDBTable>
      <MDBTableHead className="bg-info ">
        <tr>
          <th className=" d-flex justify-content-center">favorito</th>
          <th scope="col">Nombre</th>
          <th scope="col">Genero</th>
          <th scope="col">nacionalidad</th>
          <th scope="col">F/Nacimiento</th>
          <th scope="col">F/Registro</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody className="table-primary bg-light ">
        <tr>
          <th scope="row">
            <MDBIcon fas icon="star" className="text-warning" />
          </th>
          <th>Jesus</th>
          <th>male</th>
          <th>Vnz</th>
          <th>1984</th>
          <th>1995</th>
        </tr>
      </MDBTableBody>
      

    </MDBTable>

    <button
    onClick={() => navigate(-1)}
    type="button"
    className="btn btn-primary"
  >
    Regresar
  </button>

  <button type="button" className="btn btn-warning">
    Descargar
  </button>
  </MDBContainer>
  );
}
