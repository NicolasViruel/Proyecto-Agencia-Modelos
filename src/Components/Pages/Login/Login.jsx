import React, { useState } from "react";
import {useAuth} from '../../../Context/authContext'
import { useFormik } from "formik";
import { Col, Container, Form, Row, Image, Button, FormLabel } from "react-bootstrap";
import logo from "../../../Image/Imagen.jpg";
import "./Login.css";
import { regExpEmail, regExpPassword} from "../../helpers/Validate";
import * as Yup from "yup";
import clsx from "clsx";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Link, useNavigate } from "react-router-dom";
import Registro from "../Registro/Registro"
import Swal from "sweetalert2";

const Login = () => {
  const [isDisabled , setIsDisabled] = useState(false)
  const [reg, setReg] = useState(false);
  const handleCloses = () => setReg(false);
  const handleShow = () => setReg(true);

  const navigate = useNavigate();
  const { login } = useAuth()


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .min(8, "Minimo 8 caracteres")
    .max(50, "Maximo 50 caracteres")
    .matches(
      regExpEmail,
      "Recuerde deber tener un @, ejemplo@gmail.com"
    )
    .trim()
    .required("El Email es requerido"),
    password: Yup.string()
    .min(8, "Minimo 8 caracteres")
    .max(15, "Maximo 15 caracteres")
    .matches(regExpPassword, "Debe tener una letra mayúscula, una letra minúscula y un número")
    .trim()
    .required("La Password es requerida")
  })

  const initialValues ={
    email: "",
    password:"",
  };

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues,
    validateOnChange:true,
    onSubmit: async (values) =>{
      const newLogin = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }
      try {
        const res = await login(newLogin.email,newLogin.password)
        navigate("/")
        Swal.fire({
          icon: "success",
          title: "Bienvenido!",
          text: "Ya estas Logueado!",
        });
        formik.resetForm()
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.msg ? error?.response?.msg : "Error, Email ya registrado",
        });
        console.error(error);
      }
    }
  })

 
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="mt-5">
              <h2 className="fw-bold text-center py-3 border-top border-bottom border-2 ">
                Bienvenido
              </h2>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    maxLength={50}
                    minLength={8}
                  {...formik.getFieldProps("email")}
                  className= { clsx(
                    "form-control",
                    {
                      "is-valid": formik.touched.email && !formik.errors.email,
                    },
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    }
                    )} />
                    {formik.touched.email && formik.errors.email &&(
                      <div className="fv-plugins-message-container text danger fw-bolder">
                         <span role="alert">{formik.errors.email}</span> 
                      </div>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    maxLength={16}
                    minLength={8}
                    {...formik.getFieldProps("password")}
                    className={clsx(
                      "form-control",
                      {
                        "is-valid": formik.touched.password && !formik.errors.password,
                      },
                      {
                        "is-invalid": formik.touched.password && formik.errors.password
                      }
                    )}
                        
                  />
                   {formik.touched.password && formik.errors.password && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                    <span role="alert">{formik.errors.password}</span>
                    </div>
                  )}
                </Form.Group>
                <div className="mb-4 form-check">
                  <FormCheckInput type="checkbox" name="conectar" className="form-check-input"/>
                  <FormLabel/>Recordarme
                </div>

                <div className="d-grid gap-2">
                  <Button type="submit" variant="dark" disabled={isDisabled}>
                    Ingresar
                  </Button>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>
                    <span>
                      <a
                        href="/recuperarPass"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="fw-bold text-decoration-none"
                      >
                        Recuperar contraseña
                      </a>
                    </span>
                  </div>
                  <div>
                  <span>
                    No tienes cuenta?{" "}
                    <Link
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="fw-bold text-decoration-none"
                    onClick={handleShow}
                    >
                Registrate
              </Link>
              <Registro show={reg} handleClose={handleCloses} />
            </span>
                  </div>
                </div>
              </Form>
            </div>
          </Col>

          <div xs={6}md={12} className="d-none col-md-6 d-lg-block p-0 text-start mb-5">
            <div alt="login1" className="imagen-login h-100 mt-3">
              <div className="">
                <div className="col-lg-12 text-star mt-3">
                  <Image src={logo} alt="logo" width="100" className="logo-imagen" />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Login;
