import './main.css';
import Exercise from './Exercise';


const Main=()=>{
    return(
        <div className="mainContainer">
            <div className="contents">
                <h1>Where Fitness Meets Fun and Results Are Achieved</h1>
                <p>Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
            </div>
            <div className="AllImage">
                <div className="Images">
                    <div className='smallImg'>
                        <img src='https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg'/>
                        <img src='https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg'/>
                    </div>
                    <div className="oneImg1">
                        <img src='https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg'/>
                    </div>
                </div>
                <div className="Images">
                    <div className="oneImg2">
                        <img src='https://wallpaperaccess.com/full/1087621.jpg'/>
                    </div>
                    <div className='smallImg'>
                        <img src='https://wallpapercave.com/wp/wp6331008.jpg'/>
                        <img src='https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg'/>
                    </div>
                </div>
            </div>
            <Exercise/>

        </div>
    );
}

export default Main;