import { Body, Detail, Header, Home, Watch } from './components'
import { Route } from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer'
function App() {
    return (
        <>
            <Header />
            <Body>
                <Route path='/home' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/watch' element={<Watch />} />
            </Body>
        </>
    )
}

export default App
