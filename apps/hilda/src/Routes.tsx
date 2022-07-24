import Loading from './components/Loading'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'))
const UserProfile = lazy(() => import('./pages/UserProfile'))

const Routee = () => {
    return (<Suspense fallback={<Loading />}>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
    </Suspense >)
}

export default Routee
