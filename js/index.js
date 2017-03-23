//------------ JQUERY-----------------
$(document).ready(function(){
  var following=[];
  //------------- API CALL ---------------
  $.ajax({
    type : "GET",
    url : "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers : {
      'Client-ID':'tn9k8ht55y7ftg388od64v5livrmgf'
    },
    success: function(data1){
      if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is currently Offline");
    }else{
      $("#fccStatus").html("Free Code Camp is currently Online");
     }
    } 
  });
  
  //----------------- Channel --------------
  
  $.ajax({
    type: "GET",
    url:"https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers : {
      'Client-ID':'tn9k8ht55y7ftg388od64v5livrmgf'
    },
    success:function(data2){
      for(var i=0;i<data2.follows.length;i++){
        var displayName=data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status=data2.follows[i].channel.status;
        
       
        if(logo===null){
          logo="http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png";
        }
        if(status===404||status===null){
          status="User does not exist";
        }
        $('#followerInfo').prepend("<center><div class='row'>"+"<div class='col-md-4 col-xs-4'><img class='img-responsive' src='"+logo+"'/></br></div><div class='col-md-4 col-xs-4'><b>"+displayName+"</b></br></div><div class='col-md-4 col-xs-4'><b><i>"+status+"</b></i></br></div></center>");
    }
    }
    
  });
  
  
  
  // $.getJSON(url,function(data1){
  //   if(data1.stream===null){
  //     $("fccStatus").html("Free Code Camp is currently Offline");
  //   }else{
  //     $("fccStatus").html("Free Code Camp is currently Online");
  //   }
  // });
});