import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LongMenu from '../../../menu-items/menu-table/menu';
import api from '../../../data/createUser/index';
import { toast } from 'react-toastify';

export default function TableUser({ data, createUser, editUser, refresh }) {
  const [contextMenu, setContextMenu] = React.useState(null);
  const newRecord = () => {
    createUser();
  };
  const editRecord = (id) => {
    editUser(id);
  };
  const deleteRecord = (id) => {
    api
      .deleteUser(id)
      .then((res) => {
        toast.success(`Пользователь удалён: ${res.data}`, { position: 'top-right' });
      })
      .catch((err) => {
        toast.error(`Ошибка: ${err.message}`, { position: 'top-right' });
      })
      .finally(() => {
        refresh();
      });
  };

  const options = [
    { label: 'Добавить', action: newRecord },
    { label: 'Изменить', action: editRecord },
    { label: 'Удалить', action: deleteRecord }
  ];

  const handleContextMenu = (event, index) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            top: event.clientY - 6,
            left: event.clientX + 2,
            index
          }
        : null
    );
  };
  const moment = require('moment');
  return (
    <React.Fragment>
      {!!contextMenu?.top && (
        <LongMenu
          anchorPosition={{ top: contextMenu.top, left: contextMenu.left }}
          options={options}
          handleClose={() => setContextMenu(null)}
          index={contextMenu?.index}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell align="right">Фамилия</TableCell>
              <TableCell align="right">Дата рождения</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onContextMenu={(event) => handleContextMenu(event, row.id)}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{moment(row.dateOfBirth).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
