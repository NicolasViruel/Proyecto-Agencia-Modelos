import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import logo from "../../../Image/Imagen.jpg";
import { regExpEmail, regExpPassword } from "../../helpers/Validate";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {useAuth} from '../../../Context/authContext'

const Registro = ({ show, handleClose }) => {

  const { signup } = useAuth()

  const RegisterSchema = Yup.object().shape({
    // name: Yup.string()
    //   .min(8, "Minimo 8 caracteres")
    //   .max(50, "Maximo 50 caracteres")
    //   .trim()
    //   .required("El nombre es requerido"),
    email: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(50, "Maximo 50 caracteres")
      .matches(
        regExpEmail,
        "Recuerde deber tener un @, ejemplo@gmail.com "
      )
      .trim()
      .required("El Email es requerido"),
    password: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(15, "Maximo 15 caracteres")
      .required ("La password es requerida")
      .matches(
        regExpPassword,
        "Debe tener una letra mayúscula, una letra minúscula y un número"
      )
      .trim()
      .required("La password es requerida"),
    // confirmPassword: Yup.string()
    //   .min(8, "Minimo 8 caracteres")
    //   .max(15, "Maximo 15 caracteres")
    //   .oneOf([Yup.ref("password")], "Las contraseñas deben ser las mismas")
    //   .required("Confirmacion de password es requerida"),
  });

  const initialValues = {
    // name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };

  const formik = useFormik({
    validationSchema: RegisterSchema,
    initialValues,
    validateOnChange: true,
    onSubmit: async (values) => {
      const newRegister = {
        // name: values.name,
        email: values.email,
        password: values.password,
        // confirmPassword: values.confirmPassword,
      };
      try {
        const res = await signup(newRegister.email,newRegister.password)
        if (newRegister.email === auth/email-already)
          console.log(error.message);
        Swal.fire({
          icon: "success",
          title: "Bienvenido!",
          text: "Ya estas registrado!",
        });
        handleClose();
        formik.resetForm()
        // Swal.close();
        
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.msg ? error?.response?.msg : "Error, Email ya registrado",
        });
        console.error(error);
      }
    },
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={logo} alt="logo" width="60" />
            Registro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {/* <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Castro"
                name="name"
                maxLength={50}
                minLength={8}
                {...formik.getFieldProps("name")}
                className={clsx(
                    "form-control",
                    {
                      "is-valid": formik.touched.name && !formik.errors.name,
                    },
                    {
                      "is-invalid": formik.touched.name && formik.errors.name,
                    }
                  )}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="fv-plugins-message-container text-danger fw-bolder">
                    <span role="alert">{formik.errors.name}</span>
                  </div>
                )}
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@gmail.com"
              name="email"
              maxLength={50}
              minLength={8}
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                },
                {
                  "is-invalid": formik.touched.email && formik.errors.email,
                }
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.email}</span>
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu password"
              name="password"
              maxLength={15}
              minLength={8}
              {...formik.getFieldProps("password")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.password && !formik.errors.password,
                },
                {
                  "is-invalid": formik.touched.password && formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.password}</span>
              </div>
            )}
            
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirmar Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu password"
              name="confirmPassword"
              maxLength={15}
              minLength={8}
              {...formik.getFieldProps("confirmPassword")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.confirmPassword && !formik.errors.confirmPassword,
                },
                {
                  "is-invalid": formik.touched.confirmPassword && formik.errors.confirmPassword,
                }
              )}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.confirmPassword}</span>
              </div>
            )}
          </Form.Group> */}
          <div className="d-grid gap-2">
            <Button variant="dark" type="submit">
              Enviar
            </Button>
          </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Registro;