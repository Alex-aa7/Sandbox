import { Container, AppBar, Button} from "@mui/material";

export default function Main() {
  return (
    <div>
      {" "}
      <AppBar>
        <Container>

        </Container>
      </AppBar>
      <h1>MUI </h1>
      <h2>Work In Progress</h2>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
    </div>
  );
}
