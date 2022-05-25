import React from "react";
import {
  AppContainer,
  GlobalStyles,
  HeaderTitle,
} from "./assets/styles/global";
import { Sidebar, Table } from "./components";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        minWidth: 50,
      },
      {
        Header: "Nome",
        accessor: "nome",
        minWidth: 150,
      },
      {
        Header: "Email",
        accessor: "email",
        minWidth: 300,
      },
      {
        Header: "Sexo",
        accessor: "sexo",
        minWidth: 100,
      },
      {
        Header: "Telefone",
        accessor: "telefone",
        minWidth: 180,
      },
      {
        Header: "Telefone 2",
        accessor: "telefone2",
        minWidth: 180,
      },
      {
        Header: "CEP",
        accessor: "cep",
        minWidth: 100,
      },
      {
        Header: "Bairro",
        accessor: "bairro",
        minWidth: 130,
      },

      {
        Header: "Rua",
        accessor: "rua",
        minWidth: 300,
      },
      {
        Header: "Complemento",
        accessor: "complemento",
        minWidth: 300,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        nome: "Pedro Aguiar",
        email: "pedro@dev.com",
        sexo: "Masculino",
        telefone: "(85) 98999-9999",
        telefone2: "(85) 98999-7777",
        cep: "60025-905",
        bairro: "Centro",
        rua: "Rua Barão do Rio Branco",
        complemento: "Próximo ao mercadinho 2 irmão",
      },
      {
        id: 2,
        nome: "Flavio Barros",
        email: "flavio@dev.com",
        sexo: "Masculino",
        telefone: "(85) 12344-9999",
        telefone2: "(85) 42343-7777",
        cep: "13425-905",
        bairro: "Conj Ceará",
        rua: "Jose Abilio",
        complemento: "Próximo ao praça",
      },
      {
        id: 3,
        nome: "Larissa",
        email: "larissa@dev.com",
        sexo: "Feminino",
        telefone: "(85) 2323-42323",
        telefone2: "(85) 789778-432",
        cep: "60323-4423",
        bairro: "Granja Portugal",
        rua: "Humberto Lomeo",
        complemento: "Sem complemento",
      },
      {
        id: 4,
        nome: "Lucas Vidal",
        email: "lucas@dev.com",
        sexo: "Masculino",
        telefone: "(85) 98999-9999",
        telefone2: "(85) 98999-7777",
        cep: "60025-905",
        bairro: "Arrudas",
        rua: "Rua Manoel Laurindo",
        complemento: "Sem complemento",
      },
    ],
    []
  );

  return (
    <>
      <Sidebar />
      <AppContainer>
        <main>
          <HeaderTitle>Users</HeaderTitle>
        </main>
      </AppContainer>
      <GlobalStyles />
    </>
  );
}

export default App;
