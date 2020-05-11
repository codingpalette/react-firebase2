import * as firebase from 'firebase/app';

// **** 초기상태 정의
const initialState = {
  site: {
    memu: [],
    title: '타이틀 입니다',
  },
};

// **** 액션 타입 정의

export const SITE_LOAD_REQUEST = 'SITE_LOAD_REQUEST';
export const SITE_LOAD_SUCCESS = 'SITE_LOAD_SUCCESS';
export const SITE_LOAD_FAILURE = 'SITE_LOAD_FAILURE';

export const SITE_UPDATE_SUCCESS = 'SITE_UPDATE_SUCCESS';

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
      console.log(action);
      return {
        ...state,
        site: action.data,
      };
    default:
      return state;
  }
}

export default sites;
