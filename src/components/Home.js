import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home__intro row row--lg center">
                <h1 className="title focus-in-expand">
                    Chystáte se nakoupit <br />
                    od <span className="title--colored">méně známého <br />
                    prodejce </span>?
                </h1>
                <Link to="/overit-web" className="button button--colored button--lg">OVĚŘIT PRODEJCE</Link>
            </div>
            
        </div>
    )
}

export default Home;