import { useState } from 'react';
import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true)
  }
  return (
    <main>
      <>
        <MainHeader onCreatePost={showModalHandler}></MainHeader>
        <PostsList isVisible={modalIsVisible}
          onStopPosting={hideModalHandler}></PostsList>
      </>
    </main>
  )
}

export default App
