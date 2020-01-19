import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS ='sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';