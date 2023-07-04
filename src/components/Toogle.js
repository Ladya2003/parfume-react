import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch/Switch';

import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/themeSelector';
import { useTheme } from './hooks'


export default function SwitchLabels() {

// redux - получаем состояние theme: светлая или темная
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  useTheme();
// end of redux
  return (
    <FormGroup row className="switch-container">
        <p className="swith-p">Тема: {theme}</p>
      <Switch id='theme' onChange={() => dispatch(changeTheme())} />
    </FormGroup>
  );
}