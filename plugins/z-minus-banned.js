let handler = m => m
handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    let minus = 10 - 100011
    if ((user.money * 1) < minus) {
        user.money = 0
        user.banned = true
        delete user
   }
}

export default handler