import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function DataOpenPhoto(props) {
  return props.dataPeople.map((el, i) => (
    <Box
      height={'100%'}
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
        <Avatar alt="Remy Sharp" src={require('../../assets/photo/frontend.png')} sx={{ width: 150, height: 150 }} />
        <TextField label="ФИО" multiline maxRows={4} variant="standard" />
      </Stack>
    </Box>
  ));
}

export default DataOpenPhoto;
