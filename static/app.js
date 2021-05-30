const App = {
    data() {
        return {
            servers: [],
            name: ''
        }
    },
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const id = await res.json()
            const newServer = {...id, ...data}
            this.servers.push(newServer)
        },
        async remove(id) {
            await fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        },
    },
    // Как работает Async, Await. Работа с сервером c fetch:
    // https://www.youtube.com/watch?v=eKCD9djJQKc
    // https://www.youtube.com/watch?v=SHiUyM_fFME
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    }
}

Vue.createApp(App).mount('#app')
