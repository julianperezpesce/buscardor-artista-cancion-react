import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';


const Info = ({ info }) => {    
    
    if(Object.keys(info).length === 0) return null;

    const { strArtist, strArtistThumb, strGenre, strBiographyES  } = info;

    return ( 
        <Fragment>
            <div className="card card-border-light">
                <div className="card-header bg-primary text light font-weight-bold">
                    Informacion Artista
                </div>
                <div className="card-body">
                    <h2 className="card-text font-weight-bold">{strArtist}</h2>
                    <img src={strArtistThumb} alt={strArtist} />
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                    <p className="font-weight-bold">{strGenre}</p>
                    <p className="card-text">{strBiographyES}</p>
                </div>
            </div>

            
        </Fragment>
     );
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}
 
export default Info;