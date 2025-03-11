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
    const records = await pb.collection('Invite').getOne(id);
    return records;
}