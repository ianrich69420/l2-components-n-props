import logo from '../../logo.svg';
import CardA from '../card-class/CardA';
import CardB from '../card-function/CardB';
import './App.css';

// some random data
const users = [
  {
    id:1,
    name: "Jane Doe", 
    role:"Software Engineer",
    image:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-female-battle-royale-flaticons-lineal-color-flat-icons.png"
  },
  {
    id: 2,
    name: "John Doe", 
    role:"Architect",
    image:"https://img.icons8.com/dusk/64/000000/guest-male.png"
  }
]

const App = () => {
  return <h2>Hello function component.</h2>
}

export default App