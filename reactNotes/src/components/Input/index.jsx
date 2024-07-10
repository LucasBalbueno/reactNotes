import { Container } from './style';

export function Input ({ icon: Icon, ...rest }) {
    return (
        <Container>
            {/* Condição para incluir o icone apenas se o icone for verdadeiro. Operador &&: */}
            { Icon && <Icon size={20} />}

            <input {...rest} />
        </Container>
    )
}