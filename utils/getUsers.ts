
const users = [];

export default async function () {

    if (users.length == 0) {
        for (let i = 0; i < 4; i++) {
            const response = await useFetch('https://randomuser.me/api');
            if (response.data.value) {
                users.push(response.data.value.results[0]);
            }
        }
    }

    return users;
}


