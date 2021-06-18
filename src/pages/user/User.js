import "./User.css"
import { Link } from 'react-router-dom'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Kendrick</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annakendrick99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+62821123456</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annakendrick69@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Pasar Minggu, Jakarta Selatan</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annakendrick99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Kendrick" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annakendrick99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+62812345678" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Pasar Minggu, Jakarta Selatan
" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
