import "./App.css"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function App() {


  return (
    <>
      <h1>Welcome to Code Wiz</h1>
      <header>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton scale={2} />
        </SignedIn>
      </header>

    </>
  )
}

export default App
