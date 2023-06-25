const axios = require('axios');
const cheerio = require('cheerio');

class Leetcode {
    constructor(username) {
        this.username = username;
        this.url = "https://leetcode.com/graphql";
    }

    async fetch() {
        const body = `
        { 
            matchedUser(username: "${this.username}") 
            {
                username
                submitStats: submitStatsGlobal 
                {
                    acSubmissionNum 
                    {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }
        `;

        try {
            const response = await axios.post(this.url, { query: body });
            const data = response.data;
            console.log(JSON.stringify(data, null, 4));
        } catch (error) {
            console.log("error: ", error.message);
        }
    }
}

class Codeforces {
    constructor(username) {
        this.username = username;
    }

    async user_rating_change() {
        const url = `https://codeforces.com/api/user.rating?handle=${this.username}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            console.log(JSON.stringify(data, null, 4));
        } catch (error) {
            console.log("error: ", error.message);
        }
    }

    async user_info() {
        const url = `https://codeforces.com/api/user.info?handles=${this.username}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            console.log(JSON.stringify(data, null, 4));
        } catch (error) {
            console.log("error: ", error.message);
        }
    }
}

class Kattis {
    constructor(username) {
        this.username = username;
    }

    async user_info() {
        const url = `https://open.kattis.com/users/${this.username}`;

        try {
            const response = await axios.get(url);
            const pageContent = response.data;
            const $ = cheerio.load(pageContent);

            const infos = $('div.divider_list-item');
            const data = {};
            infos.each((index, element) => {
                const spans = $(element).find('span');
                if (spans.length === 2) {
                    const key = spans.eq(0).text().trim();
                    const value = spans.eq(1).text().trim();
                    data[key] = value;
                }
            });

            console.log(data);
        } catch (error) {
            console.log("error: ", error.message);
        }
    }
}