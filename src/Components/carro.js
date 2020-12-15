import  * as React from "react";
import {Edit, Create, List, Datagrid, TextField, TextInput, EditButton, SimpleForm, NumberField, NumberInput, ReferenceArrayInput, SelectArrayInput} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

export const CarroList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
                <Datagrid>
                    <TextField label="Modelo" source="modelo" />
                    <TextField label="Cor" source="cor" />
                    <NumberField label="Ano" source="anoFabricacao" />
                    <NumberField label="Portas" source="qtdPortas" />
                    <NumberField label="Lugares" source="qtdLugares" />
                    <TextField label="Categoria" source="tipos[0].nome"/>
                    <EditButton />
                    <a href="http://localhost:3000/#/aluguel/create">Alugar</a>
                </Datagrid>
        </List>
    );
}

export const  CarroEdit = props =>(
    <Edit title="Fique a vontade para autalizar seu veículo" {...props}>
        <SimpleForm>
            <TextInput source="modelo" />
            <TextInput source="cor" />
            <NumberInput source="anoFabricacao" />
            <NumberInput source="qtdPortas" />
            <NumberInput source="qtdLugares" />
        </SimpleForm>
    </Edit>
);

export const  CarroCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="modelo" />
            <TextInput source="cor" />
            <NumberInput source="anoFabricacao" />
            <NumberInput source="qtdPortas" />
            <NumberInput source="qtdLugares" />

            <ReferenceArrayInput label="Categoria"  source="tipo.id" reference="categoria" >
                <SelectArrayInput optionText="nome" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);