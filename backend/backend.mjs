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

export async function getInviteById(id) {
    let record = await pb.collection('Invite').getOne(id);
        record.img = pb.files.getURL(record, record.image);
    return record;
}

export async function getFilms() {
    let records = await pb.collection('Films').getFullList();
    records = records.map(record => {
        record.img = pb.files.getURL(record, record.image);
        return record;
    })
    return records;
}

export async function getFilmsByDate(jours) {
    const date = "2025-11-" + jours + "00:00:00.000Z";
    const dateSup = "2025-11-" + (jours - 1) + "10:00:00.000Z";
    let records = await pb.collection('Films').getFullList({filter: `projection<"${date}" && projection>"${dateSup}"`});
    records = records.map(record => {
        record.img = pb.files.getURL(record, record.affiche);
        return record;
    })
    return records;
}