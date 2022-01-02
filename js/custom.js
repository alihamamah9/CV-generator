$(document).ready(

   

    $("#Generate").click(function () {
        var Img = $("#img")[0].files[0].name;

        $("#NewName").html($("#Name").val());
        $("#NewEmail").html($("#Email").val());
        $("#NewPhone").html($("#Phone").val());
        $("#NewFacebook").html($("#Facebook").val());
        $("#Newlinkedin").html($("#linkedin").val());
        $("#NewAddress").html($("#Address").val());
        $("#NewDoB").html($("#DoB").val());
        $("#NewBoB").html($("#BoB").val());
        $("#NewNationality").html($("#Nationality").val());
        $("#NewName").html($("#Name").val());
        $("#Newwork").html($("#work").val());
        $("#NewEdu").html($("#Edu").val());
        $("#NewSkills").html($("#Skills").val());
        $("#NewHoppies").html($("#Hoppies").val());


        $("#NewImg").html('<img src="img/' + Img + '" style=" width:300%" alt="" class="myImg">');

        $('#myGender').html('');
        var checkedValue = [];
        var inputElements = document.getElementsByClassName('Check');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue.push(inputElements[i].value);
            }
        }
        for (let index = 0; index < checkedValue.length; index++) {
            $('#myGender').append('<li>' + checkedValue[index] + '</li>');
        }


        $('#myLanguges').html('');
        var checkedValue = [];
        var inputElements = document.getElementsByClassName('myCheck');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue.push(inputElements[i].value);
            }
        }
        for (let index = 0; index < checkedValue.length; index++) {
            $('#myLanguges').append('<li>' + checkedValue[index] + '</li>');
        }

    })
)