import './upButton.scss';

const UpButton = () => {
    const up = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
    }

    return(
        <div className="up-button" onClick={up}/>
    )
}

export default UpButton;