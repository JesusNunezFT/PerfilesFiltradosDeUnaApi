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
import { useEffect, useState } from "react";

export default function Favoritos() {
  const navigate = useNavigate();

  let [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    let Perfiles_Favoritos = [];
    // Buscamos en el localStorage los 80 perfiles
    let perfilesEnLocalTxt = localStorage.getItem("profiles");
    // Si se encontró algo, entramos al if:
    if (perfilesEnLocalTxt) {
      // Convertimos los perfiles de texto a objeto
      let perfilesEnLocal = JSON.parse(perfilesEnLocalTxt);
      // Ahora vamos a revisar cada uno de los perfiles:
      for (let perfil of perfilesEnLocal) {
        // convertimos el perfil a texto
        let nombreDelPerfil = JSON.stringify(perfil);
        // revisamos si este texto está guardado en localstorage:
        if (localStorage.getItem(nombreDelPerfil)) {
          // si está guardado, nos lo traemos:
          let PosiblePerfilFavorito = JSON.parse(
            localStorage.getItem(nombreDelPerfil)
          );
          // revisamos si este perfil es favorito:
          if (PosiblePerfilFavorito.estrella === true) {
            Perfiles_Favoritos.push(PosiblePerfilFavorito);
          }
        }
      }
    }
    setFavoritos(Perfiles_Favoritos);
  }, []);
  
  return (
    
    <MDBContainer>
      <MDBTable>
        <MDBTableHead className="bg-info ">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Genero</th>
            <th scope="col">nacionalidad</th>
            <th scope="col">F/Nacimiento</th>
            <th scope="col">F/Registro</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody className="table-primary bg-light">
          {favoritos.map((profile, index) => {
              return (
                <tr key={index}>
                  <td>{profile.perfil.name.first}</td>
                  <td>{profile.perfil.gender}</td>
                  <td>{profile.perfil.nat}</td>
                  <td>{profile.perfil.dob.date}</td>
                  <td>{profile.perfil.registered.date}</td>
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
      <div>
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="btn btn-primary"
        >
          Regresar
        </button>
        <button type="button" className="btn btn-warning">
          <a href="https://randomuser.me/api/?format=csv">Descargar</a>
        </button>
      </div>
    </MDBContainer>
  );
}
