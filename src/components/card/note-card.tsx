import React, { FC } from "react";
import { Note } from "../../type";
import { Link } from "react-router-dom";
import { Card, Typography, CardContent, Chip } from "@mui/material";
import { CardActionArea, Stack } from "@mui/material";

interface Props {
  note: Note;
}

const NoteCard: FC<Props> = ({ note }) => {
  return (
    <Card variant="elevation">
      <CardActionArea component={Link} to={`/note/${note.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign="center">
            {note.title}
          </Typography>

          <Stack
            direction="row"
            gap={1}
            flexWrap="wrap"
            justifyContent="center"
            mt={2}
          >
            {note.tags.map((tag) => (
              <Chip label={tag} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
