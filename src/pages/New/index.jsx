import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './style';

export function New () {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value={"https://rockeseatseat.com.br"}/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react"/>
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}