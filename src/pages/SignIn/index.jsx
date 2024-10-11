import { FiLogIn, FiMail, FiLock  } from "react-icons/fi"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./style";

export function SignIn () {
    return (
        <Container>
            <Form>
                <h1>React Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"></Button>

                <a href="#">Criar Conta</a>
            </Form>

            <Background />
        </Container>
    )
}