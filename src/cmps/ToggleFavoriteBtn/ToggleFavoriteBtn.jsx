import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty} from '@fortawesome/free-regular-svg-icons';
import { faHeart as heart} from '@fortawesome/free-solid-svg-icons';
import './ToggleFavoriteBtn.scss';

export function ToggleFavoriteBtn(){
  return (  
    <button className="clean-btn favorite-btn">
      <FontAwesomeIcon icon={heartEmpty} size="lg" />
      <FontAwesomeIcon icon={heart} size="lg" />
    </button>
  );
}
