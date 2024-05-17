import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DataOpenPhoto({ dataPeople }) {
  const moment = require('moment');
  return dataPeople?.map((el, i) => (
    <Box
      height={'500px'}
      width={'50%'}
      marginRight={'3%'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 1
      }}
      className="borderCamera"
      key={i}
    >
      <Stack spacing={1}>
        <Avatar alt="Remy Sharp" src={require(`${el?.imagePath}`)} sx={{ width: 150, height: 150 }} />
        <Typography variant="h3" component="h2">
          {`${el?.lastName} ${el?.firstName}`}
        </Typography>
        <Typography variant="h3" component="h2">
          {moment(el?.dateOfBirth).format('DD/MM/YYYY HH:mm:ss')}
        </Typography>
      </Stack>
    </Box>
  ));
}

export default DataOpenPhoto;
