const NaverSports = () => {
    const cheerio = require('cheerio');
    const axios = require('axios');

    axios.get('https://m.sports.naver.com/kbaseball/video?sort=date&date=2023-03-21&tab=date&themeType=type&themeCode=2')
        .then((response) => {
            const $ = cheerio.load(response.data);
            const elements = $('*.VideoList_link_video__TlHcC');
            console.log(elements);
        })
        .catch((error) => {
            console.error(error);
        });
    return (
        <div>
            <h1>NaverSports</h1>
            <h2>{elements}</h2>
        </div>
    );
};

export default NaverSports;