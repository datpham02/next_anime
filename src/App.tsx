import { Body, Detail, Header, Home } from './components'
import { Route } from 'react-router-dom'
function App() {
    return (
        <>
            <Header />
            <Body>
                <Route path='/home' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
            </Body>
        </>
    )
}

export default App
