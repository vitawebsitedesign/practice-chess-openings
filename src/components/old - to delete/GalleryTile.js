import GalleryTileCaption from './GalleryTileCaption';
import './GalleryTile.css';
import {NavLink} from 'react-router-dom';

const playVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.play();  

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.add('active');
};

const resetVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.pause();
    video.currentTime = 0;

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.remove('active');
};

const GalleryTile = props => {
    return (
        <NavLink to={'/exhibit/' + props.exhibitId} onMouseEnter={playVideo} onMouseLeave={resetVideo} className={props.className + ' position-relative gallery-tile'}>
            <video className="gallery-tile--video" muted loop>
                <source src={`${process.env.PUBLIC_URL}/vid/${props.thumbnails.webm}`} type="video/webm" />
                <source src={`${process.env.PUBLIC_URL}/vid/${props.thumbnails.mp4}`} type="video/mp4" />
            </video>
            <div className="position-absolute h-100 w-100 gallery-tile--overlay-gradient"></div>

            <GalleryTileCaption captionTitle={props.captionTitle} className="text-small" />
        </NavLink>
    );
};

export default GalleryTile;
