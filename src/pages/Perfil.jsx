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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Perfil() {

  const location = useLocation()
  const profile = location.state
  const navigate = useNavigate()
  
  
  const [yellowStar, setYellowStar] = useState(false)


  function handleFav() {
    let nombreDePerfil = JSON.stringify(profile)
    let perfilDeLocalStore = JSON.parse(localStorage.getItem(nombreDePerfil))
    let isProfileFavorite = perfilDeLocalStore.estrella
    if (perfilDeLocalStore.estrella === true) {
    // estrella en amarillo
      setYellowStar(false)

      let objeto = {
        perfil: profile, 
        estrella: false
       }
      // guardarlo en localStore
      localStorage.setItem(nombreDePerfil, JSON.stringify(objeto))
    } else {
      setYellowStar(true)

      let objeto = {
        perfil: profile, 
        estrella: true
       }
      // guardarlo en localStore
      localStorage.setItem(nombreDePerfil, JSON.stringify(objeto))
    }
  }

  useEffect(
    () => {
      
      let nombreDePerfil = JSON.stringify(profile)
      let isProfileInLocalStore = localStorage.getItem(nombreDePerfil)
      if (isProfileInLocalStore) {
      // revisar si el perfil es favorito o no
      let perfilDeLocalStore = JSON.parse(localStorage.getItem(nombreDePerfil))
      let isProfileFavorite = perfilDeLocalStore.estrella
      if (isProfileFavorite) {
      // estrella en amarillo
        setYellowStar(true)
      }


        // console.log("existe el perfil")
      } else {
        let objeto = {
          perfil: profile, 
          estrella: false
         }
        // guardarlo en localStore
        localStorage.setItem(nombreDePerfil, JSON.stringify(objeto))
        // console.log("no existe el perfil en LS")
      }
    }, 
    [ ]
  )



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
          <MDBCardText> <MDBIcon onClick={handleFav} far icon="star" className={yellowStar ? "text-warning" : ""}/>
          
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
        <button onClick={() => navigate(-1)} type="button" className="btn btn-primary">Regresar</button>
        <button type="button" className="btn btn-warning"> 
        
        <Link to="/favoritos">
        <i className="fas fa-search"></i>Ver Favoritos
        </Link>
      
        </button>


       
      </MDBCard>
    </MDBContainer>
  );
}
