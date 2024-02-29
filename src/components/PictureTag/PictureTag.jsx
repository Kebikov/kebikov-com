import './types';

/**
 * Picture component with additional resource.
 * - `srcImg` Link on main picture.
 * - `srcSource` Link on additional picture.
 * - `alt` Alt picture description.
 * 
 * @param {TPictureTag}
 * @example <PictureTag srcImg={#} srcSource={#} alt={#} />
 */
const PictureTag = ({srcImg, srcSource, alt}) => {

    return(
        <picture>
            <source srcSet={srcSource} type="image/webp"/>
            <img src={srcImg} alt={alt}/>
        </picture>
    )
}

export default PictureTag;