import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { Stack, Grid2 as Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TagSelect from "./tag-select";
import { Note, NoteData } from "../../type";
import { Link } from "react-router-dom";

interface Props { 
  note?: Note;
    handleSubmit: (data: NoteData) => void;
  }

const Label = styled("label")({
  fontSize: "1rem",
});

const Form: FC<Props> = ({note, handleSubmit}) => {
  const [title, setTitle] = useState<string>(note?.title || "");
  const [markdown, setMarkdown] = useState<string>(note?.markdown || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);

  const handleForm = () => {
  
   if(!title || !markdown || !selectedTags.length){
    return alert("Lütfen tüm alanları doldurunuz");
  
   }

   handleSubmit({ title, markdown, tags: selectedTags });
  };
  return (
    <Stack>
      <Stack spacing={7} sx={{ mt: 5 }}>
      <Grid container spacing={5}>
        <Grid size={6}>
          <TextField
            label="Başlık"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid size={6}>
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </Grid>
      </Grid>
        {/* markdow alani */}
        <Stack gap={2}>
          <Label>İçerik (markdown destekler)</Label>

          <TextField
            label="İçerik"
            fullWidth
            multiline
            minRows={15}
            maxRows={50}
           value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          </Stack>

        {/* buttonlar */}

        <Stack direction="row" spacing={5} justifyContent="end">
          <Button  component={Link} to=".." variant="contained" color="secondary">
            Geri
          </Button>

          <Button
            onClick={handleForm}
            variant="contained"
            sx={{ minWidthWidth: "100px" }}
          >
            Kaydet
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
