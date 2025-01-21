
const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-container">
        <label>Nombre Completo</label>
        <input
          type="text"
          value={dataForm.fullname}
          name="fullname"
          onChange={handleChangeInput}
        />

        <label>Teléfono</label>
        <input
          type="number"
          value={dataForm.phone}
          name="phone"
          onChange={handleChangeInput}
        />

        <label>Email</label>
        <input
          type="email"
          value={dataForm.email}
          name="email"
          onChange={handleChangeInput}
        />

        <button type="submit">Enviar Orden</button>
      </form>
  )
}

export default FormCheckout