import "./checkout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-container">
        <label>Nombre Completo</label>
        <input
          type="text"
          value={dataForm.fullname}
          name="fullname"
          onChange={handleChangeInput}
          placeholder="Ingrese su nombre completo"
        />

        <label>Teléfono</label>
        <input
          type="number"
          value={dataForm.phone}
          name="phone"
          onChange={handleChangeInput}
          placeholder="Ingrese su teléfono celular"
        />

        <label>Email</label>
        <input
          type="email"
          value={dataForm.email}
          name="email"
          onChange={handleChangeInput}
          placeholder="Ingrese su correo electronico"
        />

        <button type="submit" className="order-button">Enviar Orden</button>
      </form>
  )
}

export default FormCheckout