import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123}>Olá Mundo</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste earum ut
        aperiam nobis hic, beatae itaque repellat dolore rerum est magnam at
        porro consectetur officia ullam! Quos quia itaque maiores.
      </p>
    </>
  );
}
