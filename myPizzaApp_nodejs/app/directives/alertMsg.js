module.exports = function(){
  return {
    template: `
        <div class="alert alert-success text-center">
          <p>{{ title }}: <b ng-transclude>Msg Alert!</b></p>
        </div>
      `,
      replace: true, //por defaut é false. Deixando como false a tag da diretiva não é sobreescrita
      restrict: "AE", // A -> restringe ao atributo (funcionando apenas se a directiva estiver em uma div) ,
                  // E -> restringe ao elemento (contrário de A),
                  // C -> restringe a classe (diretiva precisa estar em forma de classe)
      scope: {
        title: '@' //pega o title da tag
      },
      transclude: true // sobrescreve a mensage que contem a diretiva ng-transclude
  };
};
