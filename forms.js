$("form").submit(function(event){
    //event.preventDefault()
    var userResponses = $(this).serialize()
    console.log(userResponses)
})