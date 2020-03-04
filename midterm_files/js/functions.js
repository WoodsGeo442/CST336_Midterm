let bookCover = function(){
    $("#searchImage").submit(function(e){
        e.preventDefault();
    
        $.ajax({
            method: "GET",
            url: "https://pixabay.com/api/",
            dataType: "json",
            data:{
                "key": "15447637-eedcbc2fcfe6b70ed3f3cccbb",
                "q": $("#word").val(),
                "orientation": $("#orientation").val()
            },
            success: function(result, status){
                let index1 = Math.floor(Math.random() * result.hits.length);
                let index2 = Math.floor(Math.random() * result.hits.length);
                let index3 = Math.floor(Math.random() * result.hits.length);
                let index4 = Math.floor(Math.random() * result.hits.length);
                
                $("#first").attr('src', result.hits[index1].previewURL);
                $("#second").attr('src', result.hits[index2].previewURL);
                $("#third").attr('src', result.hits[index3].previewURL);
                $("#fourth").attr('src', result.hits[index4].previewURL);
                
                $("#likesPic1").html(result.hits[index1].likes);
                $("#likesPic2").html(result.hits[index2].likes);
                $("#likesPic3").html(result.hits[index3].likes);
                $("#likesPic4").html(result.hits[index4].likes);
            
            }
        });
    });
}
    