import styles from "./Gallery.module.css";
import Profile from './Profile';

const Gallery = ({ title }) => {
    const profilesData = [
        {
            name: "Maria Sklodowksa-Curie",
            profession: "physicist and chemist",
            awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            discovered: "polonium (chemical element)"
        },
        {
            name: "Katsuko Saruhashi",
            profession: "geochemist",
            awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
            discovered: "a method for measuring carbon dioxide in sweater"
        }
    ];

    return (
        <div>
            <h1>{title}</h1>
            <div className={styles.cardBox}>
            {profilesData.map((profile, index) => (
                <Profile 
                    
                    key={index}
                    name={profile.name}
                    profession={profile.profession}
                    awards={profile.awards}
                    discovered={profile.discovered}
                />
            ))}
            </div>
         
        </div>
    );
};

export default Gallery;
