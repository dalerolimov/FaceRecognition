import TableUser from './table/index';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ModalCreateUser from './modal/modalCreateUser';
import ModalEditUser from './modal/modaleditUser';
import { useDispatch } from 'react-redux';
import { modalCreateOpen, modalEditOpen } from '../../store/reducers/modal/modalUser';
import api from '../../../src/data/createUser/index';

const DashboardDefault = () => {
  const [is_activeLoading, setisActiveLoading] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  function refresh() {
    setisActiveLoading(true);
    api.refreshUser().then((res) => {
      setData(res.data);
      setisActiveLoading(false);
    });
  }

  useEffect(() => {
    refresh();
  }, []);

  function createUserModal() {
    dispatch(modalCreateOpen());
  }

  function editUserModal(id) {
    api.UserId(id).then((res) => {
      setEditUser(res.data);
      setTimeout(() => {
        dispatch(modalEditOpen());
      }, 0);
    });
  }

  return is_activeLoading === true ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        m: 45
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <TableUser data={data} createUser={createUserModal} editUser={editUserModal} refresh={refresh} />
      <ModalCreateUser refresh={refresh} />
      <ModalEditUser editUser={editUser} refresh={refresh} />
    </>
  );
};

export default DashboardDefault;
