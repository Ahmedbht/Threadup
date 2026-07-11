import {Plus} from 'lucide-react';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon">T</span>
                <span className="logo-text">Threadup</span>
            </div>

            <button className="btn-new-post" onClick={onNewPost}><Plus size={20} />New Post</button>
        </nav>
    )
}
export default Navbar;