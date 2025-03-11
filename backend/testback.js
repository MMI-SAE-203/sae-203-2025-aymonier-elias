import { getInvite, getInviteById } from "./backend.mjs";

// try {
//     const record = await getInvite();
//     console.log(JSON.stringify(record, null, 2))
// } catch (e) {
//     console.error(e);
// }

try {
    const record = await getInviteById("u64t0yd3422749f");
    console.log(JSON.stringify(record, null, 2))
} catch (e) {
    console.error(e);
}
