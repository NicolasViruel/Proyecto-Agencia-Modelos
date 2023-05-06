import { Form, Button } from "react-bootstrap";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2";
import { crearModeloAPI } from "../../../../helpers/queries";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

const CrearModelo = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            nombreModelo:"",
            imagen:"",
            edad: 18,
            colorOjos: "negro",
            colorPelo: "negro",
            altura:2.5,
            calzado:33,
            pecho:90,
            cintura:55,
            cadera:55,
        }}
    );
    const navegacion = useNavigate();

    const onSubmit = (datos)=>{
      console.log(datos)
      crearModeloAPI(datos).then((respuesta)=>{
        if(respuesta.status === 201){
          Swal.fire("Modelo creada", "La modelo fue creada correctamente","success");
          navegacion("/administrador");
        }else{
          Swal.fire("Ocurrio un error","Vuelva a intentarlo mas tarde","error");
        }
      })
    }

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva Modelo</h1>
      <Link  className="btn btn-primary" to="/administrador"><i className='fas fa-chevron-left'></i> Volver</Link>

      <hr />
      <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre Completo*</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Mariana Monteros"
          {...register("nombreModelo",{
            required:"Este dato es obligatorio*",
            minLength:{
                value:5,
                message: "Debe ingresar como minimo 5 caracteres"
            },
            maxLength:{
                value:50,
                message: "Debe ingresar como maximo 50 caracteres"
            }
        })} 
          />
          <Form.Text className="text-danger">
            {errors.nombreModelo?.message}
            </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control type="text" placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          {...register("imagen",{
            required:"La URL de la imagen es obligatoria",
            pattern:{
              value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message:"Debe ingresar una URL valida"
            }
          })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Edad*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 23"
            {...register("edad",{
                required: "La edad es un valor requerido*",
                min:{
                    value:18,
                    message:"La edad como minimo debe ser 18"
                },
                max:{
                    value:40,
                    message:"La edad como maximo debe ser 40"
                }
            })}
          />
          <Form.Text className="text-danger">{errors.edad?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Color de Ojos*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: azules"
            {...register("colorOjos",{
                required:"Este dato es obligatorio*",
                minLength:{
                    value:5,
                    message: "Debe ingresar como minimo 4 caracteres"
                },
                maxLength:{
                    value:20,
                    message: "Debe ingresar como maximo 20 caracteres"
                }
            })}
          />
          <Form.Text className="text-danger">{errors.colorOjos?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Color de Pelo*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: negro"
            {...register("colorPelo",{
              required:"Este dato es obligatorio*",
              minLength:{
                  value:5,
                  message: "Debe ingresar como minimo 4 caracteres"
              },
              maxLength:{
                  value:20,
                  message: "Debe ingresar como maximo 20 caracteres"
              }
          })}
          />
          <Form.Text className="text-danger">{errors.colorPelo?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Altura*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 1.8"
            {...register("altura",{
                required:"La altura es un valor requerido*",
                pattern: /^\d{0,1}(\.\d{1,2})?$/,
                min:{
                    value: 1,
                    message: "La altura como minimo debe ser 1m"
                },
                max:{
                    value:3,
                    message: "La altura como maximo debe ser 3m"
                }

            })}
          />
          <Form.Text className="text-danger">{errors.altura?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Calzado*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 37"
            {...register("calzado",{
                required:"La altura es un valor requerido*",
                min:{
                    value: 20,
                    message: "El calzado como minimo debe ser 20"
                },
                max:{
                    value:50,
                    message: "El calzado como maximo debe ser 50"
                }

            })}
          />
          <Form.Text className="text-danger">{errors.calzado?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Pecho*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 90"
            // preguntar valores maximos y minimos de pecho
            {...register("pecho",{
                required:"El pecho es un dato obligtorio*",
                min:{
                    value: 20,
                    message: "El calzado como minimo debe ser 20"
                },
                max:{
                    value:100,
                    message: "El calzado como maximo debe ser 100"
                }

            })}
          />
          <Form.Text className="text-danger">{errors.pecho?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Cintura*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 60"
            {...register("cintura",{
                required:"La cintura es un dato obligtorio*",
                min:{
                    value: 20,
                    message: "La cintura como minimo debe ser 20"
                },
                max:{
                    value:100,
                    message: "La cintura como maximo debe ser 100"
                }

            })}
          />
          <Form.Text className="text-danger">{errors.cintura?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Cadera*</Form.Label>
          <Form.Control
            type="number"
            placeholder="90"
            {...register("cadera",{
              required:"La cadera es un dato obligtorio*",
              min:{
                  value: 20,
                  message: "La cadera como minimo debe ser 20"
              },
              max:{
                  value:100,
                  message: "La cadera como maximo debe ser 100"
              }

          })}
          />
          <Form.Text className="text-danger">{errors.cadera?.message}</Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearModelo;