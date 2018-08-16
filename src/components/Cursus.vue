<template>
    <div id="cursus">
        <h1><b>Cursus scolaire</b></h1>
        <div class="cursus">
            <ul>
                <li>Juillet 2014 : </li>
                <li>Juin 2018 : </li>
            </ul>
            <ul>
                <li><b>BAC S</b> option Si (lycée St Jude & St Louis)</li>
                <li>Licence 3 Informatique (université de Lille)</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cursus'
};
</script>

<style scoped>
h1 {
    font-weight: normal;
    font-size: 50px;
}
.cursus {
    justify-content: center;
    display: flex;
}
li {
    margin: 25px;
    font-size: 25px;
}
</style>
