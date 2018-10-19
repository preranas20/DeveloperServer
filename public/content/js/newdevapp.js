// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel() {
    var self= this;
   // var qrcode = new QRCode("qrcode");
    self.APIKey=ko.observable('');
    self.phone=ko.observable('');
    self.urlIP=ko.observable('http://18.223.110.166:1111');
    self.messageText=ko.observable('');
    self.toPhoneNumber=ko.observable('ak@a.com');
    
  var token=  readCookie("token");
    self.token=ko.observable(token);
    self.adminName = ko.observable('Admin');

    
    self.sendMessage = function() {


    $.ajax({
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            APIKey: self.apikey(),
            phone:self.phone() ,
            messageText:self.messageText(),
            toPhoneNumber:self.toPhoneNumber()
        }),
            url: self.urlIP()+"/",
           
            success: function(result) {
                //Write your code here
                if(result.status==200){
                //self.token(result.token);
                $.toast({ heading: 'Success',
                text: " message sent successfully",
                  showHideTransition: 'slide',
                icon: 'success'});
               
                }
                
            },
            error:
            function(result) {
                //Write your code here
                $.toast({heading:'error',text:result.message,icon:'error'});
                }
        
      });
        // .done(function( data ) {
        //   alert( "welcome your token is = : " + data.token );
        // });

    }


}

ko.applyBindings(new AppViewModel());

function createCookie(name, value, days) {
    // var expires;

    // if (days) {
    //     var date = new Date();
    //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //     expires = "; expires=" + date.toGMTString();
    // } else {
    //     expires = "";
    // }
    // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    window.localStorage.setItem(name,value);
}

function readCookie(name) {
    // var nameEQ = encodeURIComponent(name) + "=";
    // var ca = document.cookie.split(';');
    // for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) === ' ')
    //         c = c.substring(1, c.length);
    //     if (c.indexOf(nameEQ) === 0)
    //         return decodeURIComponent(c.substring(nameEQ.length, c.length));
    // }
    return window.localStorage.getItem(name);
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


// Activates knockout.js


