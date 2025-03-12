import { getFilms, getFilmsByDate, getFilmsById, getFilmsByInviteId, getInvite } from "./backend.mjs";

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
    const record = await getFilmsByInviteId("4rhz344r9b5965p");
    console.log(JSON.stringify(record, null, 2))
} catch (e) {
    console.error(e);
}