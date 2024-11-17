import { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom'


function Navbar() {
	const [statusTampil, setStatusTampil] = useState('tampil')

    function tampilmenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        }else{
            setStatusTampil('')
        }
    }
	return (
		<nav>
			<div className="wrapper">
				<div className="logo">
					<Link to="/">RezzaHome</Link>
				</div>
				<button onClick={tampilmenu}>
                    {
                        statusTampil ==''? (<FaBars />) : (<IoMdClose />)
                    }<FaBars /><IoMdClose /></button >
				<div className={`menu ${statusTampil}`} onClick={tampilmenu}>
					<ul>
						<li><HashLink to="/#portfolio">Portfolio</HashLink></li>
						<li><HashLink to="/#about">About</HashLink></li>
						<li><Link to="/education">Education</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
