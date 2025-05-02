import './button.css';

function Button({title1, title2, link1, link2}) {
    return (
        <div className="button">
            <a className='navigation-button' href="#" onClick={link1}>{title1}</a>
            <a className='navigation-button' href="#" onClick={link2}>{title2}</a>
        </div>
    )
}

export default Button;