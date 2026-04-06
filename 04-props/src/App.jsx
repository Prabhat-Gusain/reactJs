//props=read only properties that are shared between components.
//A parent components can send data to a child components
//<component key=value>

import Student from './student.jsx'
function App() {
  return(
    <>
      <Student name="Spongebob" age={19} isStudent={true}/>
      <Student name="Patrick" age={32} isStudent={false}/>
      <Student name="SquarePants" age={5} isStudent={true}/>
      <Student name="Alice" age={55} isStudent={false}/>
      <Student name="Romerio" age={25} isStudent={true}/>
    </>
  );
}

export default App
