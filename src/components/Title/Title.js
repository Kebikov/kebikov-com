import './title.scss';

const Title = (props) => {

    return(
        <div className="title-section" style={{color: `${props.color}`}}>
            {props.title}
        </div>
    )
}

export default Title;