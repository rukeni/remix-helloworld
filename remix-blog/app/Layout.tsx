import { Link } from 'remix';

const Layout: React.FC= ({children}) => {
  return (
    <>
    <nav className="navbar">
      <Link to='/' className='logo'>Remix</Link>

      <ul className="nav">
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
    </ul>
    </nav>

    <div>
      {children}
    </div>
  </>
  )
};

export default Layout;
