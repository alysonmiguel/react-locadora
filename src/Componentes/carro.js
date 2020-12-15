import  * as React from "react";
import { ReferenceManyProps, Filter, SimpleList, Edit, Create, List, Datagrid, TextField, TextInput, ReferenceField, EditButton, SimpleForm, ReferenceInput, SelectInput, NumberField, NumberInput, Button, UrlField, ReferenceArrayInput, SelectArrayInput, ReferenceManyField, SimpleFormIterator, ArrayField, SingleFieldList, ChipField, choices} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import {IconEvent} from '@material-ui/icons/Event';
import { UserCreate } from "./users";
import { AluguelCreate } from "./alugueis";

export const CarroList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="modelo" />
                    <TextField source="cor" />
                    <NumberField source="anoFabricacao" />
                    <NumberField source="qtdPortas" />
                    <NumberField source="qtdLugares" />
                    <EditButton />
                    <a href="http://localhost:3000/#/aluguel/create">Alugar</a>
                    {/* <Button onClick={() => {alert("asd");}} label="Alugar" > */}
                    {/* </Button> */}
                </Datagrid>
            )}
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
            
        

            {/* <TextInput source="categoria.categoria" /> */}

            <ReferenceArrayInput label="Categoria"  source="categorias" reference="categoria" >
                <SelectArrayInput optionText="categoria" />
            </ReferenceArrayInput>
{/* 
            <ArrayInput source="carro_categoria" label="cacacacac">
                <SimpleFormIterator>
                    <TextInput source="categoria" />
                </SimpleFormIterator>
            </ArrayInput>
         */}
{/* 
            <ReferenceManyToManyInput
                source="id"
                reference="categoria" 
                through="performances"
                using="carro_id,categoria_id"
                fullWidth
                label="Performances"
            >
               <SelectArrayInput optionText="categoria" />
            </ReferenceManyToManyInput> */}

        </SimpleForm>
    </Create>
);