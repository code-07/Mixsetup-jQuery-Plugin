$(document).ready(function(){
  $(".a").click(function(){
      $(".all").filter(".all").show();  

    });
    $(".b").click(function(){
      $(".all").filter(".pic").show();
      $(".all").not(".pic").hide();
      
    });
    $(".c").click(function(){
      $(".all").filter(".lam").show();
      $(".all").not(".lam").hide();
      
    });
});