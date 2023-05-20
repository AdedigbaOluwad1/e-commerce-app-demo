import Meta from '@/components/Meta';
import { Container, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <Meta title="Welcome" />
      <Container>
        <Typography variant='h1'>Hello there</Typography>
        <Button variant='contained' color='primary' size='large'>
          Hey
        </Button>
      </Container>
    </>
  );
}

export default Welcome;
