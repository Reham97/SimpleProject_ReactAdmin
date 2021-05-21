import React from "react"
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput
} from "react-admin"
const PostEdit = (props) => {
    return (
        <Edit title="Edit a Post" {...props}>
            <SimpleForm>
                <TextInput disabled source="id"></TextInput>
                <TextInput source="body"></TextInput>
                <DateInput label="Published" source="publishedAt"></DateInput>
            </SimpleForm>
        </Edit>
    );
}

export default PostEdit;
