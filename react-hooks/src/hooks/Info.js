import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name,
            nickname
        })
    });

    // 마운트될 떄만 실행하고 싶을 때
    useEffect(() => {
        console.log('마운트될 때만 실행')
    }, [])

    // 특정 값이 업데이트 될 때만 실행
    useEffect(() => {
        console.log(name);
    }, [name]);

    // 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶을 경우
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    })

    // 오직 언마운트 될때만 뒷정리 함수를 호출하고 싶을 경우
    useEffect(() => {
        console.log('effect2');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, []);
    
    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;