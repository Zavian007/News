import React, { useEffect, useState } from 'react';
import Card from './Card';
<<<<<<< HEAD
=======
import Footer from './Footer';

>>>>>>> 7db0cd4 (Your commit message here)


const Newsapp = () => {
    const [search, setSearch] = useState("South Africa");
    const [newsData, setNewsData] = useState(null);
<<<<<<< HEAD
    const API_KEY = "bd4761b04cd041fe88022d8dd53ae462";
=======
    const API_KEY = "4b1ca42d29044152b12e2dd4be690d85";
>>>>>>> 7db0cd4 (Your commit message here)

    const getData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            if (jsonData.articles) {
                let dt = jsonData.articles.slice(0, 10);
                setNewsData(dt);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
            setNewsData([]);
        }
    };

    useEffect(() => {
        getData();
<<<<<<< HEAD
    }, []);
=======
    }, [getData]);
>>>>>>> 7db0cd4 (Your commit message here)

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div >
            {/* Main Content */}
            <nav >
                <div>
                    <h1>News</h1>
                </div>
                <ul style={{ display: 'flex', gap: '150px', listStyleType: 'none', padding: 0 }}>
                    <li>
                        <a href="https://www.bbc.com/news/world" style={{ fontWeight: 600, fontSize: '17px', textDecoration: 'none', color: 'white' }}>All News</a>
                    </li>
                    <li>
                        <a href="https://www.cnn.com/world" style={{ fontWeight: 600, fontSize: '17px', textDecoration: 'none' ,color: 'white'  }}>Trending</a>
                    </li>
                </ul>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search News"
                        value={search}
                        onChange={handleInput}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className="head">Stay Updated with Global News</p>
            </div>
            <div>
                {newsData ? <Card data={newsData} /> : <p>No news data available.</p>}
            </div>
<<<<<<< HEAD
=======
            <div><Footer/></div>
>>>>>>> 7db0cd4 (Your commit message here)
        </div>
    );
}
    
export default Newsapp;
