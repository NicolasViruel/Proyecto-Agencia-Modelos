import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import ImagePass2 from "../../../Image/login.jpg"
import logo from "../../../Image/Imagen.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {regExpEmail} from "../../helpers/Validate"

const RecuperarPass = () => {
    const [email , setEmail] = useState("");

    const RecuperarPass = Yup.object().shape({
        email: Yup.string()
        .min(8, "Minimo 8 caracteres")
        .max(50, "Maximo 50 caracteres")
        .matches(
            regExpEmail,
            "Recuerde debe tener un @, ejemplo@gmail.com"
        )
        .trim()
        .required("El email es requerido")
    })

    const initialValues = {
        email: ""
    }

    const formik = useFormik({
        validationSchema: RecuperarPass,
        initialValues,
        validateOnChange:true,
        onSubmit: async (values) =>{
            const newPass = {
                email: values.email
            }
        }
    })


  return (
    <>
    <Container>
        <Row>
            <Col  xs={12} md={12} lg={6} className="mt-5">
                <Image src={ImagePass2} alt="logo" className='d-none d-xxl-block mb-5'/>
            </Col>
            <Col xs={12}md={12}lg={12} xl={6}>
                 <Form>
                <Form.Group className="mt-5">
                    <Image src={logo} alt="logo" width="100" />
                  <Form.Label htmlFor="disabledTextInput" className='mt-3 fw-bolder '> E M C Models</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu email" name='email' value={email} onChange={({target})=> setEmail(target.value)} maxLength={50} minLength={8}
                  {...formik.getFieldProps("email") } 
                    className = { clsx(
                        "form-control mt-4",
                        {
                            "is-valid" : formik.touched.email && !formik.errors.email,
                        },
                        {
                            "is-invalid" : formik.touched.email && formik.errors.email,
                        }
                    )}/>
                    {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container text-danger fw-bolder">
                        <span role="alert">{formik.errors.email}</span> 
                     </div>
                    )}
                </Form.Group>
                </Form>
                <div className='mt-3 mb-3 text-end'>
                    <Button type="submit" variant="dark">
                    Enviar
                  </Button>
                </div>
                
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default RecuperarPass