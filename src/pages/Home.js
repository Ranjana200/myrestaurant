import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/salad-2068220__480.jpg';
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
        <div className ="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Yummy food available</p>
            <Link to="/menu">
            <button>
              ORDER NOW
            </button>
            </Link>
          </div>
        </div>
        </Layout>
  )
}

export default Home