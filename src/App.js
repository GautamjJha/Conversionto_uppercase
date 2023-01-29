
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return(
    
    <>
    <Navbar />
    <div className = "container my-3">
    <TextForm heading = "Enter The Text To Analyze Below"/>
    </div>
    
    </>
    
  );
    

}

export default App;
