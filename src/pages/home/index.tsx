import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Alert, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import PageContainer from "../../styled/page-container";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";
import NoteCard from "../../components/card/note-card";

const Home: FC = () => {
  const { notes } = useSelector((store: RootState) => store.notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);


  const filtredNotes = useMemo(()=>{
    return notes.filter((note)=> note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&&
   selectedTags.every((tag)=> note.tags.includes(tag))
  );
  },[notes,title,selectedTags])

  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <img src="/logo.png" width={50} />
          <Typography variant="h4">Notlar</Typography>
        </Stack>
        <Button component={Link} to="/create" variant="contained">
          Oluştur
        </Button>
      </Stack>

      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />

      <Grid container spacing={2} mt={4}>
        {filtredNotes.length === 0 ? (
          <Grid size={12}>
            <Alert severity="warning">Not Bulunamadı</Alert>
          </Grid>
        ) : (
          filtredNotes.map((note) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={note.id}>
              <NoteCard key={note.id} note={note} />
            </Grid>
          ))
        )}
      </Grid>
    </PageContainer>
  );
};

export default Home;
