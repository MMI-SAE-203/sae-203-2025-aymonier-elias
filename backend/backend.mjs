import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getInvite() {
    let records = await pb.collection('Invite').getFullList();
    records = records.map(record => {
        record.img = pb.files.getURL(record, record.image);
        return record;
    })
    return records;
}

export async function getFilms() {
    let records = await pb.collection('Filme').getFullList();
    records = records.map(record => {
        record.img = pb.files.getURL(record, record.image);
        return record;
    })
    return records;
}

export async function getFilmsByDate(jours) {
    const date = "2025-11-" + jours;
    console.log(date);
    let records = await pb.collection('Filme').getFullList({filter: `projection="${date}"`});
    records = records.map(record => {
        record.img = pb.files.getURL(record, record.image);
        return record;
    })
    return records;
}