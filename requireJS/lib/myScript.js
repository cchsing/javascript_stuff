define(["jquery", "markdown_it"], function ($, markdown_it) {
    function readMDFile(file)
    {
        var rawFile = new XMLHttpRequest();
        var allText = "";
        rawFile.open("GET", file, false); 
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    allText = rawFile.responseText;
                }
            }
        }
        rawFile.send(null);
        return allText;
    }

    function button_doc(filepath, outputId) {
        allText = readMDFile(filepath);
        var md = markdown_it();
        var result = md.render(allText);
        document.getElementById(outputId).innerHTML = result;
    }

    $('#button_1').on('click', function(){
        var filepath = "../README.md";
        var outputId = "div_1";
        button_doc(filepath, outputId);
    })

});