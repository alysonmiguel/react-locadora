import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin , ListGuesser, Resource} from 'react-admin';
import {UserCreate, UserEdit, UserList} from "./Components/users";
import {CarroList, CarroEdit, CarroCreate} from "./Components/carro"

import Dashboard from './Dashboard';
import { AluguelCreate, AluguelList } from "./Components/alugueis";
import { CategoriaCreate } from "./Components/categoria";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EventNoteIcon from '@material-ui/icons/EventNote';
 
const dataProvider = jsonServerProvider('http://localhost:8080');

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} >

        <Resource name="usuario" list={UserList}  edit={UserEdit} create={UserCreate} icon={PermIdentityIcon}/>
        <Resource name="carro" list={CarroList}  edit={CarroEdit} create={CarroCreate} icon={DirectionsCarIcon} />
        <Resource name="aluguel" list={AluguelList} create={AluguelCreate} icon={EventNoteIcon} />
        <Resource name="categoria" list={ListGuesser} create={CategoriaCreate} />
  
     </Admin>
);

export default App;
