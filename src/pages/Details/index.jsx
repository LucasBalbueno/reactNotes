// importando o CSS
import { Container, Links, Content } from "./style";

// importando o header
import { Header } from "../../components/Header";

// importando o component button
import { Button } from "../../components/Button";

// importando o component section
import { Section } from "../../components/Section";

// importando o component ButtonText
import { ButtonText } from "../../components/ButtonText";

// importanto o component Tag
import { Tag } from "../../components/Tags"

// todo o component deve começar com a letra maiúscula.
export function Details() {
  // Aqui poderá ficar outras funções que iremos utilizar dentro da nossa página.

  // Dentro da função do component devemos usar o return para retornar algo para a página.
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao ReactJS!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem quaerat perferendis 
            mollitia sapiente minima debitis atque sint laborum soluta, a ad nobis commodi enim tempore eos, 
            beatae doloribus cupiditate.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ea, voluptas amet impedit 
            assumenda excepturi! Fugit quos porro fugiat voluptate? Quos expedita amet aspernatur ipsa laudantium 
            officiis quod mollitia veniam!
            </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="https://github.com/LucasBalbueno" target="_blank">https://github.com/LucasBalbueno</a></li>
              <li><a href="https://github.com/LucasBalbueno" target="_blank">https://github.com/LucasBalbueno</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="NodeJS"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}