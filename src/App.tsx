import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput labetext='Quaquercoisa' id='input' type='text' />
          </div>
          <div className='formRow'>
            <p>Nesse ciclo descanse por 5 min.</p>
          </div>
          <div className='formRow'>
            <p>Ciclo</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
