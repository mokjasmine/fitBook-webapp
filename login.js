function attempt_login(){
    event.preventDefault();
     Parse.User.logIn($("#fieldname").val(), $("#fieldpass").val(), {
       success: function(user) {        
        window.location.href = "http://localhost/sb_fls/profile.html";
      },
        error: function(user, error) {
        console.log("FAILED "+error.message);
      }
    });
  }
  function getusrinfo(user){
    event.preventDefault(user);
    var user=Parse.User.current();
    FB.api("/me",function(response){      
       user.set("firstname",response.first_name);
       user.set("lastname",response.last_name);  
       user.set("fbid",response.id);    
       user.save(null,{
        success:function(user){
          console.log("sucess");
           window.location.href = "http://localhost/sb_fls/profile.html";
        },
        error: function(user,error){
          console.log(error.message);          
        }
       });       
  });
  }

  function newLog(){
    event.preventDefault();
    var log=$("#TypeHere").val();
    var current_user=Parse.User.current();
    var Log=Parse.Object.extend("Log");
    var newlog=new Log();
    newlog.set("message",log);
    newlog.set("userid",current_user.id);
    $("#TypeHere").val('Enter a message.');
    if(log!="Enter a message.")
    {
      newlog.save();
      $("<p>"+log+"</p>").css("font-family","Lucida Sans Unicode").hide().appendTo($("#logs")).slideDown(300);
    }
  }

