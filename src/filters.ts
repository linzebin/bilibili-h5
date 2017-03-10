export default {
    count(value: number) {
        if (value < 10000) {
            return value.toString()
        }
        return (value / 10000).toFixed(1) + '万'
    }
}