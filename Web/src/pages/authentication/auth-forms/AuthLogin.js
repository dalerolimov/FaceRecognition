import React, { useEffect } from 'react';
import api from '../../../data/auth/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthLogin = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setChecked(true);
    }
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          login: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).login : '',
          password: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).password : ''
        }}
        validationSchema={Yup.object().shape({
          login: Yup.string().max(30).required('Логин'),
          password: Yup.string().max(20).required('Требуется ввести пароль')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          api
            .loginUser(values)
            .then((res) => {
              if (checked) {
                localStorage.setItem('user', JSON.stringify(values));
              }
              localStorage.setItem('jwtToken', JSON.stringify(res.data));
              navigate('/admin');
              setStatus({ success: true });
              setSubmitting(false);
            })
            .catch((err) => {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
              toast.error(`Неверный логин или пароль: ${err.message}`, { position: 'top-right' });
            })
            .finally(() => {
              setChecked(false);
              if (!checked) {
                localStorage.removeItem('user');
              }
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="text-login">Логин</InputLabel>
                  <OutlinedInput
                    id="text-login"
                    type="text"
                    value={values.login}
                    name="login"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Логин"
                    fullWidth
                    error={Boolean(touched.login && errors.login)}
                  />
                  {touched.login && errors.login && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.login}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Пароль</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Введите пароль"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Запомнить</Typography>}
                  />
                  {/* <Link variant="h6" component={RouterLink} to="/authRecover" color="text.primary">
                    Забыли пароль?
                  </Link> */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Вход
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
