import { getFilms, getFilmsByDate, getInvite } from "./backend.mjs";

// try {
//     const record = await getInvite();
//     console.log(JSON.stringify(record, null, 2))
// } catch (e) {
//     console.error(e);
// }

try {
    const record = await getFilmsByDate();
    console.log(JSON.stringify(record, null, 2))
} catch (e) {
    console.error(e);
}

