import React from 'react';
// 컴포넌트를 리덕스와 연동하기 위한 connect 함수
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// state를 파라미터로 받아오며 이 값은 현재 스토어가 지니고 있는 상태값
const mapStateToProps = state => ({
    number: state.counter.number,
});

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = dispatch => ({
    increase: () => {
        // 액션 생성함수 불러오기
        dispatch(increase());
    },
    decrease: () => {
        // 액션 생성함수 불러오기
        dispatch(decrease());
    }
})

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);