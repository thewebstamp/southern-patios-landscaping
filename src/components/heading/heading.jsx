import './heading.css';

function Heading({title, description}) {
    return (
        <div className="heading">
            <div className="top">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="top-design">
                    <div className="left"></div>
                    <div className="middle"></div>
                    <div className="right"></div>
                </div>
            </div>
        </div>
    )
}

export default Heading;