<template>
    <div id="summary">
        <h1><b>Bienvenue !</b></h1>
        <div id="resume">
            <p>Bienvenue sur mon curriculum vitae en ligne réalisé par mes soins.</p>
            <p>Vous y trouverez naturellement mon CV dans sa totalité et vous avez la possibilité de le télécharger avec <a href="https://github.com/timothee-decoster/timothee-decoster-cv/raw/master/src/assets/timothee_decoster_cv.pdf" download>ce lien</a></p>
        </div>
        <h2><b>Pour commencer...</b></h2>
        <div id="first-info">
            <p>Je m'appelle Timothée Decoster</p>
            <p>Je suis né à Armentières le 30 Janvier 1996</p>
            <p>Je réside au 1475 rue de Flètre à Merris (59270)</p>
            <p>Si vous désirez me contacter, mon numéro de téléphone est le <b>06.83.16.92.68</b> et mon adresse mail est <b>decostertimoth@gmail.com</b></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accueil'
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
    font-size: 5vh;
}
p {
    font-size: 3vh;
}
</style>
