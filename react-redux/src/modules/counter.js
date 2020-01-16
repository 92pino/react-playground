// 액션 타입 정의
// 문자열 내용 ==> 모듈 이름/액션 이름'
// 문자열 안에 모듈 이름을 넣음으로써 프로젝트가 커졌을 경우 액션의 이름이 충돌하지 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 한번에 여러개 import 하고 싶을 경우
// import { increase, decrease } from './counter';
// import 
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;