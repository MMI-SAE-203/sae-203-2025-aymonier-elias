import { getFilms, getFilmsByDate, getFilmsById, getInvite } from "./backend.mjs";

// try {
//     const record = await getInvite();
//     console.log(JSON.stringify(record, null, 2))
// } catch (e) {
//     console.error(e);
// }

// try {
//     const record = await getFilmsByDate("12");
//     console.log(JSON.stringify(record, null, 2))
// } catch (e) {
//     console.error(e);
// }

// try {
//     const record = await getFilms();
//     console.log(JSON.stringify(record, null, 2))
// } catch (e) {
//     console.error(e);
// }

try {
    const record = await getFilmsById("z7ku5ap2fblt63m");
    console.log(JSON.stringify(record, null, 2))
} catch (e) {
    console.error(e);
}