import { FavoriteRounded } from "@material-ui/icons";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { http } from "../services/api";

export function CardComponent() {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await http("https://jsonplaceholder.typicode.com/posts");

      setPost(result);
      console.log(result);
    }

    fetchData();
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      {post.map((post, index) => (
        <Grid
          key={post.id}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Card sx={{ mt: 20 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    setLike(!like);
                  }}
                >
                  <FavoriteRounded
                    style={{ color: like ? "#ff4040" : false }}
                  />
                </IconButton>
                <Button
                  aria-label="access repository"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Acessar post
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
