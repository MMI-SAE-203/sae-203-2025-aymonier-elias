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
        record.img = pb.files.getURL(record, record.affiche);
        return record;
    })
    return records;
}

export async function getFilmsById(id) {
    let record = await pb.collection('Films').getOne(id);
        record.img = pb.files.getURL(record, record.affiche);
        // record.invite.img = pb.files.getURL(record, record.invite.image);
        record.dure = Math.floor(record.dure / 60) + "h " + record.dure %60 + "m";
        let embed_link = record.bande_annonce.replace("watch?v=", "embed/");
        if (record.bande_annonce.indexOf("&")!=-1) {
            embed_link = embed_link.slice(0,record.bande_annonce.indexOf("&")-2);
        }
        record.bande_annonce_embed = embed_link;
    return record;
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


export async function getFilmsByInviteId(id) {
    let record = await pb.collection('Films').getFullList({filter: `invite="${id}"`});
    record = record.map(record => {
        record.img = pb.files.getURL(record, record.affiche);
        record.jour = formatDate(record.projection);
        record.heure = formatHeure(record.projection);
        return record;
    })
    return record;
}
export async function getActiviteByInviteId(id) {
    let record = await pb.collection('Activite').getFullList({filter: `invite="${id}"`});
    record = record.map(record => {
        record.img = pb.files.getURL(record, record.affiche);
        record.jour = formatDate(record.projection);
        record.heure = formatHeure(record.projection);
        return record;
    })
    return record;
}








function formatDate(dateStr) {
    const date = new Date(dateStr.replace(" ", "T"));
    return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(date);
}

function formatHeure(dateStr) {
    const date = new Date(dateStr.replace(" ", "T"));
    return new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date).replace(":", "h");
}