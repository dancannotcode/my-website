import './App.css'

function Header(){
    return(<>
        <ul className='headerList'>
            <li className = 'tab'>
                 <a href="index.html">
                <span>Home</span>
                </a>            </li>
            <li className = 'tab'>
                <a href="project.html">
                <span>Project</span>
                </a>
            </li>
            <li className = 'tab'>
            <a href="src/assets/Resume [Ortega, Daniel].docx.pdf" target='_blank'>
                <span>Resume</span>
                </a>            </li>
            <li className = 'tab'>
                <a href="contact.html">
                <span>Contact</span>
                </a>            </li>
            <li className = 'tab'>
                 <a href="about.html">
                <span>About</span>
                </a>            
            </li>
        </ul>
    </>)
}

export default Header;