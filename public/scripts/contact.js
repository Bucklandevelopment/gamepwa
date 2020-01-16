function saveToFirebase() {
    /*var emailObject = {
        email: email
    };*/

    let email = document.getElementById("exampleInputEmail1").value;
    let suscribe = confirm("Deseas suscribirte a BT con el email " + email);

    suscribe ?
    firebase.database().ref('subscription-entries').push().set(email)
        .then(function(snapshot) {
            success(snapshot); // some success method
        }, function(error) {
            console.log('error' + error);
            error(error); // some error method
        }) :
    alert("Suscripción cancelada")
}

function success(snapshot){
    console.log(snapshot)
}

function error(error){
    alert("No has podido suscribirte, por culpa del error:" + error);
}