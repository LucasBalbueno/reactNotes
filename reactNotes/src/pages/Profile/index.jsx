import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from './style';

export function Profile () {
    return (
        <Container>
            <header>
                <a href=""><FiArrowLeft /></a>
            </header>

            <Avatar>
                <img src="https://www.github.com" alt="Foto do usuário" />
            </Avatar>

            <Form>
                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input 
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input 
                    placeholder='Senha Atual'
                    type='password'
                    icon={FiLock}
                />

                <Input 
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}