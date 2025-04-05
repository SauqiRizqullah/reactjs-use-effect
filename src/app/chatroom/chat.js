export function createConnection(serverUrl, roomId){

    return {
        connect() {
            console.log(`✅ Connecting to ${roomId} room at ${serverUrl}`)
        },
        disconnect() {
            console.log(`❌ Disconnecting from ${roomId} room at ${serverUrl}`)
        }
    }
}