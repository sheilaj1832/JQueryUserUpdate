var url = "http://localhost:8080/Users/";

$().ready(() => {

    $("#getuser").click(() => {
        getUserByPrimaryKey($("#userid").val())
    });
    $("#save").click(() => {
        updateUser();
    });

});

function updateUser() {
    var id = $("#pid").val();
    var username = $("#pusername").val();
    var password = $("#ppassword").val();
    var firstname = $("#pfirstname").val();
    var lastname = $("#plastname").val();
    var phonenumber = $("#pphone").val();
    var email = $("#pemail").val();
    var reviewer = $("#previewer").val();
    var admin = $("#padmin").val();
    var active = $("#pactive").val();

    var user = {
        id: Number(id),
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        email: email,
        reviewer: reviewer == 'on' ? true : false,
        admin: admin == 'on' ? true : false,
        active: active == 'on' ? true : false
    }

    $.ajax(url+"Change", {
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (resp) => {
            console.log(resp)
        },
        type: 'POST'
    });
}

function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url+"Get/"+id)
        .then((resp) => {
            render(resp.data);
        });
}

function render(user) {
    $("#pid").val(user.id);
    $("#pfirstname").val(user.firstName);
    $("#plastname").val(user.lastName);
    $("#pusername").val(user.userName);
    $("#ppassword").val(user.password);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
    $("#pactive").prop("checked", user.active);
}

