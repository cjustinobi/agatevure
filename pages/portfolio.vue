<template>
    <div class="portfolio-container">
        <h1>Check again soon</h1>
    </div>
</template>

<style>
    .portfolio-container{
        display: grid;
        grid-row: auto;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    h1{
        align-self: center;
    }
</style>

<script>
    export default {

        head () {
            return {
                title: 'Portfolio - Glory Agatevure',
                meta: [
                    { hid: 'description', name: 'description', content: 'My recent projects' }
                ]
            }
        }

    }
</script>