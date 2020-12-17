$(function () {
    $("#burger-submit").on("submit", (e) => {
        e.preventDefault();

        let freshBurger = {
            burger_name: $("#freshBurgers").val().trim(),
            devoured: 0
        };

        $.ajax("/api/create", {
            type: "POST",
            data: freshBurger
        }).then((result) => {
            console.log("Created new burger" + result);
            location.reload();
        })
    });

    $(".Devoured").on("click", (e) =>{
        // e.preventDefault();
        // console.log($(e.target).data("id"));
        let id = $(e.target).data("id");
        console.log("id of the being devoured burger " + id);

        $.ajax("/api/update", {
            type: "PUT",
            data: {
                devoured: 1,
                id : id
            }
        }).then((result) =>{
            console.log("Updated Id : " + id);
            location.reload();
        })
    });
})