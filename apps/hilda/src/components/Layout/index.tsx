import { ReactNode, useEffect } from 'react'
import { useStyles } from './styles'
import { useNavigate  } from 'react-router-dom'

type LayoutProps = {
    children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    const navigate  = useNavigate()

    const classes = useStyles()
    return (<div>
        <div className={classes.menu} >
        <div onClick={() => navigate('/Home')}>Home</div>
        <div onClick={() => navigate('/Providers')}>Providers</div>
        <div onClick={() => navigate('/UserProfile')}>UserProfile</div>
        </div>
        {children}</div>)
}
export default Layout
