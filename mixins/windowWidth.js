
export default {
    data() {
        return { windowWidth: '' }
    },

    mounted() {
        this.$nextTick(() => {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
            this.windowWidth = window.innerWidth
        })
    },

    watch: {
        windowWidth(e) {
            this.windowWidth = e
            if (
                this.windowWidth < 768 ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ) {
                this.$store.dispatch('shared/toggleSidebar', false)
            } else {
                this.$store.dispatch('shared/toggleSidebar', true)
            }
        }
    }
}