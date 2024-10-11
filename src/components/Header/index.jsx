// importanto icons do react-icons depois de instalado com npm install react-icons --save
import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style';

export function Header () {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/lucasBalbueno.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Lucas Balbueno</strong>
                </div>
            </Profile>

            <Logout>
                {/* inserindo o icon no component */}
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}