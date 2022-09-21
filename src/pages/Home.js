import styles from './Home.module.css';
import Button from '../components/Button/Button';

const Home = () => {
    return ( 
        <main className={styles.home}>
           <p className="primaryText">Hi, my name is</p> 
           <h1 className='whiteText'>Scott Caprisecca</h1>
           <p className="lightText">I create solutions through coding</p>
        </main>
     );
}
 
export default Home;