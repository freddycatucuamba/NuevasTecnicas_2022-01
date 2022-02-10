
import './App.css';

function App() {
  return (
    <div >
      
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>

      
    </div>
  );
}
const App1 = () => <div ><HelloWorld/></div>
class App2 extends React.Component {
  render(){
    return 
      <div >
          <HelloWorld/>
      </div>
    
}
}
function HelloWorld() {
  return (
    <div id="hello"><p> Funcion Hola </p></div>
  )

}
export default App;
