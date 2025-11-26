import headerstyles from '../styles/Header.module.css';

export default function Header(){
    return(
    <div id={headerstyles.header}>
        <img id={headerstyles.logo} src="/logo.svg" alt="Logo du site"/>
        <a href="/signin"><img src="/profil.png" alt="User Profil Icon"/></a>
        
    </div>
    )
}