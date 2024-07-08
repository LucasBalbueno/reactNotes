// importando o CSS
import { Container } from "./style";

// todo o component deve começar com a letra maiúscula.
export function Details () {
  // Aqui poderá ficar outras funções que iremos utilizar dentro da nossa página.

  // Dentro da função do component devemos usar o return para retornar algo para a página.
  return (
      <Container>
        <h1>Hello World!</h1>
        <p>Tudo funcionando aqui!</p>
      </Container>
  )
}