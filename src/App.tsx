import { Body, Detail, Header, Home } from './components'
import { Route } from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer'
function App() {
    return (
        <>
            <Header />
            <Body>
                <Route path='/home' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/watch' element={<VideoPlayer />} />
            </Body>
        </>
    )
}

export default App
