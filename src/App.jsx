import './index.css';
import Intro from "./Intro.jsx";
import Content from "./Content.jsx";
import Image from './Image.jsx';

export default function App() {
  return (
    <div className="container">
      <Image />
      <Intro />
      <Content />
    </div>
  );
}
