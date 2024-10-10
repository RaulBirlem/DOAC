import React, { useState } from 'react';
import Profile from './Profile';
import styles from './Details.module.css';
const Details = ({ profile, index, total }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.cardBox}>
        <Profile 
          name={profile.name}
          artist={profile.artist}
          description={profile.description}
          url={profile.url}
          alt={profile.alt}
        />
      </div>
      <div className={styles.details}>
      <p>{`${index} of ${total}`}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      
      {showDetails && <p>{profile.description}</p>}

      </div>
    </div>
  );
};

export default Details;
