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



export default function Perfil() {

  const location = useLocation()
  const profile = location.state
  

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
          src={profile.picture.large}
        ></MDBCardImage>

        <MDBCardBody >
          <MDBCardTitle>
            <strong>Nombre:</strong><p>{ `${profile.name.first} ${profile.name.last}` }</p>
          </MDBCardTitle>
          <MDBCardText> <MDBIcon far icon="star" className="text-warning"/>
          </MDBCardText>
        </MDBCardBody>

        <MDBListGroup className="shadow-5">

          <MDBListGroupItem>
            <strong> Genero: </strong>
            <p> {profile.gender}</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Email:</strong>
            <p>{profile.email}</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Nacionalidad:</strong>
            <p>{profile.nat}</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Fecha de Nacimiento</strong>
            <p>{profile.dob.date}</p>
          </MDBListGroupItem>

          <MDBListGroupItem>
            <strong>Fecha de Registro</strong>
            <p>{profile.registered.date}</p>
          </MDBListGroupItem>

        </MDBListGroup>

        

      </MDBCard>
    </MDBContainer>
  );
}
