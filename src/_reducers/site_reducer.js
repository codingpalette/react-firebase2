// **** 초기상태 정의
const initialState = {
  site: {
    memu: [],
    title: '',
  },
  error: false,
  errorMessage: '',
};

// **** 액션 타입 정의

export const SITE_LOAD_REQUEST = 'SITE_LOAD_REQUEST';
export const SITE_LOAD_SUCCESS = 'SITE_LOAD_SUCCESS';
export const SITE_LOAD_FAILURE = 'SITE_LOAD_FAILURE';

export const SITE_UPDATE_SUCCESS = 'SITE_UPDATE_SUCCESS';

export const ERROR_OPEN_SUCCESS = 'ERROR_OPEN_SUCCESS';
export const ERROR_CLOSE_SUCCESS = 'ERROR_CLOSE_SUCCESS';

function sites(state = initialState, action) {
  switch (action.type) {
    case SITE_LOAD_REQUEST:
      return {
        ...state,
      };
    case SITE_LOAD_SUCCESS:
      return {
        ...state,
      };
    case SITE_LOAD_FAILURE:
      return {
        ...state,
      };
    case SITE_UPDATE_SUCCESS:
      return {
        ...state,
        site: action.data,
      };
    case ERROR_OPEN_SUCCESS:
      return {
        ...state,
        error: true,
        errorMessage: action.data,
      };
    case ERROR_CLOSE_SUCCESS:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
}

export default sites;
