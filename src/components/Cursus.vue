<template>
    <div id="cursus">
        <h1><b>Cursus scolaire</b></h1>
        <table class="cursus">
            <tr>
                <td><b>Juillet 2014</b> : </td>
                <td>BAC S option Si (lycée St Jude & St Louis)</td>
                <td><img src="@/assets/st_jude.jpg" alt="Saint Jude" width="75px" height="75px"></td>
            </tr>
            <tr>
                <td><b>Juin 2018</b> : </td>
                <td>Licence 3 Informatique (université de Lille)</td>
                <td><img src="@/assets/univ_lille.png" alt="Université de Lille" width="150px"></td>
            </tr>
        </table>
        <h2><b>Actuellement</b></h2>
        <p>Master MEEF 2° degrée Maths option Informatique</p>
    </div>
</template>

<script>
export default {
    name: 'Cursus'
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
    font-size: 50px;
}
.cursus {
    display: flex;
    flex-direction: column;
    align-items: center;
}
tr {
    display: flex;
    align-items: center;
    margin: 20px;
    font-size: 25px;
}
td {
    margin-right: 50px;
    margin-left: 50px;
}
p {
    font-size: 25px
}
</style>
