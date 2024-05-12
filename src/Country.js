const fetchData = async ()=>{

    try {
        const res =  await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        setPosts(data)
    } catch (error) {
        throw new Error(error)
    }
}
export default fetchData