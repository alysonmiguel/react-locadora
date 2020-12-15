import * as React from "react";
import { List, Datagrid, EditButton, TextField, FormDataConsumer, EmailField, BooleanInput, TextInput, Edit, Create, SimpleForm, ReferenceInput, SelectInput, DateInput} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <EmailField source="email" />
            <TextField source="telefone" />
            <TextField source="senha" />  
            <EditButton />        
        </Datagrid>
    </List>
);

export const  UserEdit = props =>(
    <Edit title="Edição de usuario" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <BooleanInput source="hasEmail" />
             <FormDataConsumer subscription={{ values: true }}>
                 {({ formData, ...rest }) => formData.hasEmail &&
                      <TextInput source="email" {...rest} />
                 }
            </FormDataConsumer>
            <TextInput source="telefone" />
            <TextInput source="senha" />
        
            <TextInput source="endereco.cep" />
            <TextInput source="endereco.rua" />
            <TextInput source="endereco.cidade" />
                
        </SimpleForm>
    </Edit>
);

export const  UserCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" type="email" />
            <TextInput source="telefone" />
            <TextInput source="senha" type="password" />  

            <TextInput source="endereco.cep" />
            <TextInput source="endereco.rua" />
            <TextInput source="endereco.cidade" />
        </SimpleForm>
    </Create>
);

