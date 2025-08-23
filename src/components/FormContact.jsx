import Button from './Button'

const FormContact = () => {
    return (
        <div>
            <label>
                Asunto:
                <input type="text"/>
            </label>
            <label>
                Email:
                <input type="email"/>
            </label>
            <label>
                Mensaje
                <textarea/>
            </label>
            <Button
                message="Enviar mensaje"
            />
        </div>
    )
}

export default FormContact