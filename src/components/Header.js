import Logo from './Logo';

export default function Header(props) {
  return (
    <header className="header">
      <div className="context">
        <Logo className="logo" logoImage={props.logoImage} />
        <h1>
          NETE
          <div className='delta'>
            △
          </div>
        </h1>
        <h5>당신이 만드는 일대기, 네티아</h5>
      </div>
    </header>
  );
}