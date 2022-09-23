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
import React, { useEffect, useState } from "react";

export default function Principal() {
  let [profiles, setProfiles] = useState([]);
  let [gender, setGender] = useState([]);
  let [age, setAge] = useState([]);

  // async function handleConsulta(){
  //   await fetch("https://randomuser.me/api/?results=80")
  //   .then(response => response.json())
  //   .then(data => setProfiles(data.results))
  //   let generos = profiles.map(p => p.gender)
  //   console.log(generos)
  //   setGender(generos)
  // }

  async function handleConsulta() {
    let perfiles = await fetch("https://randomuser.me/api/?results=80")
      .then((response) => response.json())
      .then((data) => data.results);
    setProfiles(perfiles);
    handleGender(perfiles);
  }

  function handleGender(perfiles) {
    let generos_duplicados = perfiles.map((p) => p.gender);
    let generos = generos_duplicados.filter((item, index) => {
      return generos_duplicados.indexOf(item) === index;
    });
    setGender(generos);
  }
  console.log(gender);

  return (
    <MDBContainer breakpoint="sm" style={{ height: 800 }}>
      <MDBRow className=" align-items-center">
        <MDBCol size="md" className="text-center">
          <MDBTable className="text-center">
            <MDBTableHead className="bg-info shadow-1-strong ">
              <tr className=".justify-content-center">
                <th></th>
                <th scope="col">
                  <MDBBtn onClick={handleConsulta}>Consultar</MDBBtn>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              <tr className="table-primary">
                <th scope="row">
                  {" "}
                  <select className="browser-default custom-select">
                    <option>Nombre</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                </th>
                <td>
                  <select className="browser-default custom-select">
                    <option>Edad</option>
                    <option value="1">15-20</option>
                    <option value="2">20-30</option>
                    <option value="3">30-40</option>
                    <option value="3">40-50</option>
                    <option value="3">50-60</option>
                    <option value="3">60-70</option>
                  </select>
                </td>
                <td>
                  <select className="browser-default custom-select">
                    <option>Nacionalidad</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                </td>
              </tr>
              <tr className="table-primary">
                <th scope="row">
                  <select className="browser-default custom-select">
                    <option value="">Todos</option>
                    {gender.length &&
                      gender.map((g) => {
                        return <option value={g}>{g}</option>;
                      })}
                  </select>
                </th>
                <td>
                  <select className="browser-default custom-select">
                    <option>Fecha de Nacimiento</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                </td>
                <td>
                  <select className="browser-default custom-select">
                    <option>Fecha De Regristro</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                </td>
              </tr>
              <tr>
                <th></th>
                <td scope="col">
                  <MDBBtn>Filtrar Datos</MDBBtn>
                </td>
                <td></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>

      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">EDAD</th>
            <th scope="col">GENERO</th>
            <th scope="col">NACIONALIDAD</th>
            <th scope="col">FECHA DE NACIMIENTO</th>
            <th scope="col">FECHA DE REGISTRO</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {profiles.map((profile, index) => {
            return (
              <tr key={index}>
                <td>{profile.name.first}</td>
                <td>{profile.dob.age}</td>
                <td>{profile.gender}</td>
                <td>{profile.location.country}</td>
                <td>{profile.dob.date}</td>
                <td>{profile.registered.date}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
