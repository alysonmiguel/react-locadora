import  * as React from "react";
import {List, Datagrid, TextField, SimpleForm, TextInput, Create, ReferenceInput, SelectInput, DateInput} from 'react-admin';


export const  CategoriaCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="categoria.categoria" />
        </SimpleForm>
    </Create>
);