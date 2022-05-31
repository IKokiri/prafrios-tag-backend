import typeorm from "typeorm"
const { getManager } = typeorm

const savetag = async (dataTag) => {
    const values = Object.values(dataTag)
    const keys = Object.keys(dataTag).join(`,`)
    const numberParams = values.length
    const interrogationParamsNumber = '?,'.repeat(numberParams).slice(0,-1)
    try {
        const query = `INSERT INTO tags (${keys}) values (${interrogationParamsNumber})`
        getManager().query(query, values)
    } catch (error) {
        console.log(error)
        return false
    }
    return null;
}

const getTags = async (model) => {
    const where = (model == 'modelo1')? ' where obs9 = 0 ' : ' where obs9 != 0 '
    try {
        const query = `select * from tags ${where} order by id desc`
        return await getManager().query(query)
    } catch (error) {
        console.log(error)
        return false
    }
    return null;
}

const removeTagById = async (id) => {
    try {
        const query = `delete from tags where id = ?`
        return await getManager().query(query, [id])
    } catch (error) {
        console.log(error)
        return false
    }
    return null;
}

const getTagById = async (id) => {
    try {
        const query = `select * from tags where id = ?`
        return await getManager().query(query, [id])
    } catch (error) {
        console.log(error)
        return false
    }
    return null;
}

const setVerified = async (id) => {
    try {
        const query = `update movies set verified = datetime() where id = ?`
        const movie = await getManager().query(query, [id])
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const getMostRated = async (title) => {
    try {
        const query = `select * from movies order by verified desc, rate desc limit 10`
        const movies = await getManager().query(query, [title])
        return movies
    } catch (error) {
        console.log(error)
        return false
    }
}

export { savetag, getTags, getTagById, removeTagById, setVerified }