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
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";



export default function Perfil(props) {

  console.log(props)
  const location = useLocation()
  const profile = location.state
  console.log(location)

  return (
    <MDBContainer
      breakpoint="md"
      className="d-flex justify-content-center align-items-center "
      style={{ width: 500, height: 800 }}
    >
      <MDBCard >

        <MDBCardImage
          className="shadow-2-strong"
          position="center"
          alt="..."
          src="https://mdbootstrap.com/img/new/standard/city/062.webp"
        ></MDBCardImage>

        <MDBCardBody >
          <MDBCardTitle>
            <strong>Nombre:</strong><p>Jesus Nuñez</p>
          </MDBCardTitle>
          <MDBCardText> <MDBIcon far icon="star" className="text-warning"/>
          </MDBCardText>
        </MDBCardBody>

        <MDBListGroup className="shadow-5">

          <MDBListGroupItem>
            <strong> Genero: </strong>
            <p> Male </p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Email:</strong>
            <p>@gmail.com</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Nacionalidad:</strong>
            <p>Ar</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Fecha de Nacimiento</strong>
            <p>1980</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Fecha de Registro</strong>
            <p>1990</p>
          </MDBListGroupItem>

        </MDBListGroup>

        <MDBCardBody>
          <MDBCardLink>Delete</MDBCardLink>
          <MDBCardLink href="#">
            <MDBIcon fas icon="trash" />
          </MDBCardLink>
        </MDBCardBody>

      </MDBCard>
    </MDBContainer>
  );
}
