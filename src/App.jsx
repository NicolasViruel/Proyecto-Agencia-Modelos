import { BrowserRouter } from "react-router-dom"
import RouterPrincipal from "./Routes/RouterPrincipal"

function App() {
  

  return (
    <div>
      <BrowserRouter>
      
      <main>
        <RouterPrincipal/>
      </main>
    
      </BrowserRouter>
    </div>
  )
}

export default App
