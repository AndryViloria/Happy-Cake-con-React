const Contacto = () => {
    return (
        <main>
            <h2>Cuéntanos ¿En qué podemos ayudarte?</h2>

            <form>
                <label htmlFor="">Correo:</label>
                <input type="email" placeholder="Ingresa tu correo electrónico" />

                <label htmlFor="">Mensaje:</label>
                <textarea type="mensaje" cols="30" rows="10"></textarea>

                <button className="btn">Enviar Mensaje</button>
            </form>

        </main>
    )
}

export default Contacto