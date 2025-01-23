import { object, string, number } from "yup";

let userSchema = object({
    fullname: string().required("Se debe ingresar un nombre"), 
    phone: number().positive("El teléfono debe ser un número positivo").min(1111111111, "Ingrese un número de teléfono valido").max(38949999999).required("Se debe ingresar un número de teléfono"),
    email: string().email("Ingrese un correo electrónico valido").required("Se debe ingresar un correo electrónico")
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success", message: "Validaciones relizadas correctamente" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm;