import { FC } from "react";
import {  Typography } from "@mui/material"
import PageContainer from "../../styled/page-container";
import Form from "../../components/form";
import { NoteData } from "../../type";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/slices/notesSlice";
import { useNavigate } from "react-router-dom";


const Create: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit =(data:NoteData)=>{
        dispatch(addNote(data));
        navigate("/");
    };


    return <div>
    <PageContainer> 

    <Typography variant="h4">Not Oluştur</Typography>

    <Form handleSubmit={handleSubmit} />

    </PageContainer>
    </div>
}

export default Create;