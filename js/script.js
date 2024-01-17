const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: './index.php',
            albumList: [],
        }
    },

    methods: {
        getAlbumList() {
            axios.get(this.apiUrl).then((response) => {
                this.albumList = response.data;

                console.log(response.data);
            });
        }
    },

    created() {
        this.getAlbumList();
    }

}).mount('#app')