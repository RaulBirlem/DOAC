import React from 'react';

const Profile = ({ name, artist, description, url, alt }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
      <h2>{name}</h2>
      <p><strong>Artist:</strong> {artist}</p>
      <img src={url} alt={alt} style={{ width: '100%', height: '50%',marginTop:'60px', borderRadius: '8px' }} />
    </div>
  );
};

export default Profile;
