$('#btn').click(call);
function call(){
    var xhrRequest=new XMLHttpRequest();
    xhrRequest.onload=function(){
        console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);
        console.log(responseJSON);
    }
    xhrRequest.open('get','https://www.superheroapi.com/api.php/90b839ceda08471f2e4549c79d75fd30/',true);
    xhrRequest.send();
}