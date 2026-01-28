export async function getCards() {
    try {
        const url = `https://t-core.fit-hub.pro/Test/GetTariffs`

        const response = await fetch(url, {
            cache: 'no-store'
        })
        if (!response.ok) {
            throw new Error('Ошибка загрузки')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
}