import Avatar from './Avatar';
import styles from './Profile.module.css';
const Profile = ({name, profession, awards, discovered}) => {
    return (
        <div className={styles.card}>
          <h2>{name}</h2>
          <Avatar/>
          <ul>
            <li>Profession:{profession}</li>
            <li>Awards:{awards}</li>
            <li>Discovered:{discovered}</li>
          </ul>
        </div>
)
}

export default Profile