import { Link } from "react-router-dom";


const Navbar = () => {

    const navOption = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/aboutme'><li><a>About</a></li></Link>
        <Link to='/skill'><li><a>Skill</a></li></Link>
        <Link to='/project'><li><a>Projects</a></li></Link>
        <Link to='/contact'><li><a>Contact</a></li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-orange-500 font-bold text-3xl">Bithi</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to='https://drive.google.com/file/d/14TxokWI4h-A8TMUdJM2aW7_My6wT_ybh/view?usp=drive_link'><button className="btn text-white btn-warning bg-orange-500">Resume</button></Link>
            </div>
        </div>
    );
};

export default Navbar;