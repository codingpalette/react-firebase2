import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import { ERROR_CLOSE_SUCCESS } from '../../_reducers/site_reducer';

function Error() {
  const { error, errorMessage } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  const ErrorClose = () => {
    dispatch({
      type: ERROR_CLOSE_SUCCESS,
    });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={error}
        autoHideDuration={3000}
        onClose={ErrorClose}
        message={errorMessage}
      />
    </>
  );
}

export default Error;
