import React, { useEffect, useCallback } from 'react';
// import logo from './logo.svg';
import { GlobalStyles } from './GlobalStyles';
import Router from './Router';
import { useSelector, useDispatch } from 'react-redux';
import './firebase';
import * as firebase from 'firebase/app';
import { SITE_UPDATE_SUCCESS } from '../_reducers/site_reducer';

function App() {
  const dispatch = useDispatch();

  const { site } = useSelector((state) => state.site);

  const subscibe = useCallback(() => {
    firebase
      .database()
      .ref()
      .child('site')
      .on(
        'value',
        (sn) => {
          const v = sn.val();
          console.log(v);
          if (!v) {
            firebase.database().ref().child('site').set(site);
          }
          dispatch({
            type: SITE_UPDATE_SUCCESS,
            data: v,
          });
        },
        (e) => {
          console.log(e.message);
        }
      );
  }, []);

  useEffect(() => {
    subscibe();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
