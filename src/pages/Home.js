import Button from '../components/Button';
import '../normalize.css';
import '../App.css';

const Home = () => {
    return ( 
        <main className='Home'>
            <div className='aboutMe'>
                <h1 className='whiteText'>Hi, I'm Scott Caprisecca</h1>
                <p className="subtitle whiteText">React Frontend Developer</p>

                <p className='whiteText'>some info about me</p>
                <div className="buttonContainer">
                    <Button text="View Projects" type="primaryBtn" />
                    <Button text="Download Resume" type="secondaryBtn" />
                </div>

            </div>
        </main>
     );
}
 
export default Home;