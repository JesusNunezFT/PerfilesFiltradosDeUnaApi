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

export default function Perfil() {
  return (
    <MDBContainer
      breakpoint="md"
      className="justify-content-center"
      style={{ width: 500, height: 800 }}
    >
      <MDBCard>
        <MDBCardImage
          position="center"
          alt="..."
          src="https://mdbootstrap.com/img/new/standard/city/062.webp"
        ></MDBCardImage>
        <MDBCardBody>
          <MDBCardTitle>Nombre:</MDBCardTitle>
          <MDBCardText>
            <MDBIcon far icon="star"/>
          </MDBCardText>
        </MDBCardBody>
        <MDBListGroup flush>
          <MDBListGroupItem>Genero:</MDBListGroupItem>          
          <MDBListGroupItem>Email:</MDBListGroupItem>
          <MDBListGroupItem>Nacionalidad:</MDBListGroupItem>
          <MDBListGroupItem>Fecha de Nacimiento:</MDBListGroupItem>
          <MDBListGroupItem>Fecha de Registro:</MDBListGroupItem>
        </MDBListGroup>
        <MDBCardBody>
          <MDBCardLink >Delete</MDBCardLink>
          <MDBCardLink href="#"><MDBIcon fas icon="trash"/></MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
