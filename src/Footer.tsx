type Footer = {
    copyrightText : string;
}

const Footer = ({copyrightText}:Footer) =>{
    return (
        <p className='text-center text-red-400'> {copyrightText} </p>
    )
}

export default Footer;