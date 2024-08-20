import logo from './logo.svg';
import './App.css';


function App() {
  const courses = ['BCA', 'BCOM', 'BSC', 'MSC', 'MCOM', 'MA'];
  
   
  localStorage.store('user',{course:course});
  return (
    <div className="App">
      <label>Select Course</label>

      <select>

        <option value="">select course</option>

        {courses.map((course)=>(<option value={course}

        >{course}</option>))}
        
      </select>
      <button  type="button">Save</button>
    </div>
  );
}

export default App;
