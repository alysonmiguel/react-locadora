import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Create, ListGuesser, Resource} from 'react-admin';
import {UserCreate, UserEdit, UserList} from "./Componentes/users";
import {CarroList, CarroEdit, CarroCreate} from "./Componentes/carro"

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import { AluguelCreate, AluguelList } from "./Componentes/alugueis";
import { CategoriaCreate } from "./Componentes/categoria";

 
const dataProvider = jsonServerProvider('http://localhost:8080');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}  >

        <Resource name="usuario" list={UserList}  edit={UserEdit} create={UserCreate}/>
        <Resource name="carro" list={ListGuesser}  edit={CarroEdit} create={CarroCreate}/>
        <Resource name="aluguel" list={AluguelList} create={AluguelCreate} />
        <Resource name="categoria" list={ListGuesser} create={CategoriaCreate} />
  
     </Admin>
);

export default App;
