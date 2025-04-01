import "./nav.css"

function Nav(){

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        console.log("aaa");
        
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
    <nav>
    <div className="companyLogo">
        <img src="https://safaroff.com/img/logo.svg" alt="" />
    </div>
    <div className="shortcuts">
        <div onClick={() => handleScroll('bizKimik')}>Biz kimik?</div>
        <div onClick={() => handleScroll('advantageSection')}>Üstünlüyümüz</div>
        <div onClick={() => handleScroll('whatwedoSection')}>Nələr edirik</div>
    </div>
    </nav>
    )
}

export default Nav;