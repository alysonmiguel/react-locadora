import  * as React from "react";
import {List, Datagrid, TextField, SimpleForm, TextInput, Create, ReferenceInput, SelectInput, DateInput} from 'react-admin';

export const AluguelList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="dataAluguel" />
            <TextField source="usuario.nome" label="Usuário" />
            <TextField source="carro.modelo" label="Carro" />
        </Datagrid>
    </List>
);

export const  AluguelCreate = props =>(
    <Create {...props}>
        <SimpleForm>
           
            <DateInput source="dataAluguel" />
        
            <ReferenceInput label="Usuario" source="usuario.id" reference="usuario">
                <SelectInput optionText="nome" />
            </ReferenceInput>

            <ReferenceInput label="Carro" source="carro.id" reference="carro">
                <SelectInput optionText="modelo" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);