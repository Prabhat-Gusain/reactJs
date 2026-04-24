//conditional rendering= allows you to control what gets rendered in your application based on certain condition(show.hide or change components)

import UserGreeting from'./userGreeting.jsx'

function App() {
    return 
    (
      <>
        <UserGreeting isLoggedIn={true} username="BroCode"/>
      </>
    );

}

export default App
