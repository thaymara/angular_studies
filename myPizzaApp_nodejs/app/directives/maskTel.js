module.exports = function(){
  return {
    require: "ngModel",
    link: function(scope, element, attributes, ctrl){
      element.bind("keyup", function(){
        //console.log(ctrl.$viewvalue);
        var _formatTel = function(value){
          value = value.replace(/[^0-9]+/g, "");
          if(value.length > 4 && value.length <= 8){
            value = value.substring(0,4) + "-" + value.substring(4,8);
          }else if(value.length > 4){
            value = value.substring(0,5) + "-" + value.substring(5,9);
          }
          return value;
        };
        ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
        ctrl.$render();
      });

      // function to remove the dash to save in data base
      /* ctrl.$parsers.push(function(value)){
        if(value.length > 8){
          value = value.replace(/[^0-9]+/g, "");
          return value;
        }
      }; */
    }
  };
};
