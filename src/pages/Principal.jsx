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
  let [nat, setNat] = useState([]);
  let [fn, setFn] = useState([]);
  let [fr, setFr] = useState([]);

  async function handleConsulta() {
    let perfiles = await fetch("https://randomuser.me/api/?results=80")
      .then((response) => response.json())
      
      .then((data) => data.results);
    setProfiles(perfiles);

    handleGender(perfiles);
    console.log(gender);

    handleAge(perfiles);
    console.log(age);

    handleNat(perfiles);
    console.log(nat);

    handleFn(perfiles);
    console.log(fn);

    handleFr(perfiles);
    console.log(fr);
  }

  function handleGender(perfiles) {
    console.log(perfiles);
    let generos_duplicados = perfiles.map((p) => p.gender);
    let generos = generos_duplicados.filter((item, index) => {
      return generos_duplicados.indexOf(item) === index;
    });
    setGender(generos);
    console.log(generos);
  }

  function handleAge(perfiles) {
    let edades_duplicados = perfiles.map((p) => p.dob.age);
    let edades = edades_duplicados.filter((item, index) => {
      return edades_duplicados.indexOf(item) === index;
    });
    edades = edades.sort();
    setAge(edades);
    console.log(edades);
  }

  function handleNat(perfiles) {
    let nacionalidad_duplicados = perfiles.map((p) => p.nat);
    let nacionalidad = nacionalidad_duplicados.filter((item, index) => {
      return nacionalidad_duplicados.indexOf(item) === index;
    });
    nacionalidad = nacionalidad.sort();
    setNat(nacionalidad);
    console.log(nacionalidad);
  }

  function handleFn(perfiles) {
    let nacimiento_duplicados = perfiles.map((p) => p.dob.date);
    let nacimiento = nacimiento_duplicados.filter((item, index) => {
      return nacimiento_duplicados.indexOf(item) === index;
    });
    nacimiento = nacimiento.sort();
    setFn(nacimiento);
    console.log(nacimiento);
  }

  function handleFr(perfiles) {
    let registro_duplicados = perfiles.map((p) => p.registered.date);
    let registro = registro_duplicados.filter((item, index) => {
      return registro_duplicados.indexOf(item) === index;
    });
    registro = registro.sort();
    setFr(registro);
    console.log(registro);
  }

  return (
    <MDBContainer breakpoint="sm" style={{ height: 800 }}>
      <MDBRow className=" align-items-center">
        <MDBCol size="md" className="text-center">
          <MDBTable className="text-center">
            <MDBTableHead className="bg-info shadow-1-strong ">
              <tr >
                <th></th>
                <th scope="col">
                  <MDBBtn onClick={handleConsulta}>Consultar</MDBBtn>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              <tr className="table-primary">
                <th scope="row" className="d-flex justify-content-center">
                  <th>
                    <div className="form-outline">
                      <input type="text" id="form12" className="form-control border border-primary bg-light" />
                      <label className="form-label" for="form12">
                        Nombre <MDBIcon fas icon="search" />
                      </label>
                      
                    </div>
                  </th>
                </th>

                <td>
                  <label htmlFor="">Edad</label>
                  <select className="browser-default custom-select">
                    <option value="">todas</option>
                    {age.length &&
                      age.map((g, index) => {
                        return <option value={g}>{g}</option>;
                      })}
                  </select>
                </td>
                <td>
                  <label htmlFor="">F/Nacimiento</label>
                  <select className="browser-default custom-select">
                    <option value="">todos</option>
                    {fn.length &&
                      fn.map((g) => {
                        return <option value={g}>{g}</option>;
                      })}
                  </select>
                </td>
              </tr>
              <tr className="table-primary">
                <th scope="row">
                  <label htmlFor="">Genero</label>
                  <select onChange={ (e) => setSelectedGender(e.target.value) } className="browser-default custom-select">
                  
                    <option value="">Todos</option>
                    {gender.length &&
                      gender.map((g) => {
                        return <option value={g}>{g}</option>;
                      })}
                  </select>
                </th>
                <td>
                  <label htmlFor="">Nacionalidad</label>
                  <select className="browser-default custom-select">
                    <option value="">todos</option>
                    {nat.length &&
                      nat.map((g, index) => {
                        return <option value={g}>{g}</option>;
                      })}
                  </select>
                </td>
                <td>
                  <label htmlFor="">F/Registro</label>
                  <select className="browser-default custom-select">
                    <option value="">todos</option>
                    {fr.length &&
                      fr.map((g) => {
                        return <option value={g}>{g}</option>;
                      })}
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
                <td>{profile.nat}</td>
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
