let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 99999999999) {
        user.money = 99999999999
    }
    
    if ((user.level * 1) < 0) {
        user.level = 0
    }
    // if ((user.tabungan * 1) > 1000000) {
        // user.tabungan = 1000000
    // }    
}

export default handler