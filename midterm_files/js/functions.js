let bookCover = function(){
    $("#bookCover").submit(function(e){
        e.preventDefault();
    
        $.ajax({
            method: "GET",
            url: "https://openlibrary.org/api/books?",
            dataType: "json",
            success: function(data){
                
            
            }
        });
    });
}
    