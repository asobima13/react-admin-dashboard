import './Topbar.css'
import { Link } from 'react-router-dom'
import { NotificationsNone, Language, Settings }  from '@material-ui/icons'

export default function Topbar() {
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <Link to="/" className="link">
                            <span className="logo">My React Admin</span>
                        </Link>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBadge">2</span>
                        </div><div className="topbarIconContainer">
                            <Settings/>
                        </div>
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
