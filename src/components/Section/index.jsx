import { Container } from './style';

export function Section ({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            {/* Aqui iremos inserir o contúdo do component */}
            {children}
        </Container>
    )
}