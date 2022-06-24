import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/* Icons of Material UI */
import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home"
import ExploreIcon from "@material-ui/icons/Explore"
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAAppIcon from "@material-ui/icons/ExitToApp";
// import UserCard from "./UserCard";

const Header = () => {

	// const [ search, setSearch ] = useState('');
	// const [ users, setUsers ] = useState([]);
	const dispatch = useDispatch();
	// const { auth } = useSelector(state => state);
	// const { pathname } = useLocation(); // Estraemos pathname del objeto traido por useLocation. 
	// const [load, setLoad] = useState(false);

	const isActive = (pn) => {
		// if(pn === pathname) return 'header__active'
	}


  return (
    <div className="header">
      <div className="header__right">
        <h3 className="header__right--networks">Nach</h3>
      </div>

      <div className="header__left">
        <Link to='/' className="header__left--avatar">
          <div className="header__left--avatar">
            {/* <Avatar src={auth.user.avatar} /> */}
            {/* <h3 className="header__left--avatar__user">{auth.user.fullname}</h3> */}
          </div>
        </Link>

        <Link to="/">
          <IconButton>
            <HomeIcon className={`${isActive("/")}`} />
          </IconButton>
        </Link>

        <Link to="/message">
          <IconButton>
            <MessageIcon className={`${isActive("/message")}`} />
          </IconButton>
        </Link>

        <Link to="/notification">
          <IconButton>
            <NotificationsIcon className={`${isActive("/notification")}`} />
          </IconButton>
        </Link>

        <Link to="/explore">
          <IconButton>
            <ExploreIcon className={`${isActive("/explore")}`} />
          </IconButton>
        </Link>

        <IconButton>
          <ExitToAAppIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
