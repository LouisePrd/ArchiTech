import headerstyles from '../styles/Header.module.css';

export default function Header(){
    return(
    <div id={headerstyles.header}>   
        <a href="/signin"><img id={headerstyles.logo} src="/logo.svg" alt="Logo du site"/></a>
        <a href="/profil"><img src="/user.svg" alt="User Profil Icon"/></a>
        
    </div>
    )
}