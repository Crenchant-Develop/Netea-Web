import React, { useEffect, useState } from 'react';

//defined components
import { GetUserName } from '../components/GetUser';
import { getCookie, setCookie } from '../components/Cookies';

//로그아웃을 구현할 것.
//메인페이지
function Main() {
  let [userName, setUserName] = useState(undefined);

  const onUserNamer = () => {
    (async () => {    //코드가 두번 실행되는 버그가 있음 원인분석이 필요함
      setUserName(await GetUserName());
    })();
  };

  useEffect(onUserNamer, [onUserNamer]);

  return (
    <article>
      <div className='context'>
        {userName ? userName : "모험가"}님! 네티아 세계에서 무엇을 하고 싶으세요?
      </div>
    </article>
  );
};

export default Main;