import { useParams, useNavigate } from 'react-router-dom'

const ContactDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const handleContact = () => {
        console.log('Funcionou')
        return navigate('/contact')
    }

    return (
        <div>
            <h3>Exibindo informações do contato {id}</h3 >
            <button onClick={handleContact}>Voltar</button>
        </div>
    )
}

export default ContactDetails
