// importando o CSS
import { Container } from "./style";

// importando o header
import { Header } from "../../components/Header";

// importando o component button
import { Button } from "../../components/Button";

// todo o component deve começar com a letra maiúscula.
export function Details () {
  // Aqui poderá ficar outras funções que iremos utilizar dentro da nossa página.

  // Dentro da função do component devemos usar o return para retornar algo para a página.
  return (
      <Container>
        <Header />
        <Button title="Voltar" />
      </Container>
  )
}