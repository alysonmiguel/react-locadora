import  * as React from "react";
import {Filter, SimpleList, Edit, Create, List, Datagrid, TextField, TextInput, ReferenceField, EditButton, SimpleForm, ReferenceInput, SelectInput} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
export const PostList = props => {
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
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="id" />
                    </ReferenceField>
                    <TextField source="modelo" />
                    <TextField source="cor" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const  PostEdit = props =>(
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput reference="users" source="userId">
                <SelectInput optionsText="name" />
            </ReferenceInput>

            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);


export const  PostCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput reference="users" source="userId">
                <SelectInput optionsText="name" />
            </ReferenceInput>

            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);