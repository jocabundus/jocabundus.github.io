window.addEventListener("DOMContentLoaded", function(){
});

window.addEventListener("load", function(){
    
    var output = document.getElementById("response");
    
    var inlineSprites = {
        black_pixel_2x2    : "data:image/gif;base64,R0lGODlhAgACAIABADMzMxERESH5BAEKAAEALAAAAAACAAIAAAICRF4AOw==",
        black_pixel_3x3    : "data:image/gif;base64,R0lGODlhAwADAIABADMzMxERESH5BAEKAAEALAAAAAADAAMAAAIEjAMXBQA7",
        black_pixel_5x5    : "data:image/gif;base64,R0lGODlhBQAFAIABADMzMxERESH5BAEKAAEALAAAAAAFAAUAAAIFjI8GyVEAOw==",
        black_pixel_7x7    : "data:image/gif;base64,R0lGODlhBwAHAIABADMzMxERESH5BAEKAAEALAAAAAAHAAcAAAIHjI+pB+tfAAA7",
        black_plus_5x5     : "data:image/gif;base64,R0lGODlhBQAFAIABADMzMxERESH5BAEKAAEALAAAAAAFAAUAAAIHjB9wwItXAAA7",
        black_plus_7x7     : "data:image/gif;base64,R0lGODlhBwAHAIABADMzMxERESH5BAEKAAEALAAAAAAHAAcAAAILjI+Apgf/0gptmgIAOw==",
        black_stripes_thin : "data:image/gif;base64,R0lGODlhAwADAIABADMzMxERESH5BAEKAAEALAAAAAADAAMAAAIETHAZBQA7",
        black_stripes_thick: "data:image/gif;base64,R0lGODlhBQAFAIABADMzMxERESH5BAEKAAEALAAAAAAFAAUAAAIIRAKGuZbKUAEAOw==",
        gray_pixel_2x2     : "data:image/gif;base64,R0lGODlhAgACAIABAH9/fxERESH5BAEKAAEALAAAAAACAAIAAAICRF4AOw==",
        gray_pixel_3x3     : "data:image/gif;base64,R0lGODlhAwADAIABAH9/fxERESH5BAEKAAEALAAAAAADAAMAAAIEjAMXBQA7",
        gray_pixel_5x5     : "data:image/gif;base64,R0lGODlhBQAFAIABAH9/fxERESH5BAEKAAEALAAAAAAFAAUAAAIFjI8GyVEAOw==",
        gray_pixel_7x7     : "data:image/gif;base64,R0lGODlhBwAHAIABAH9/fxERESH5BAEKAAEALAAAAAAHAAcAAAIHjI+pB+tfAAA7",
        gray_plus_5x5      : "data:image/gif;base64,R0lGODlhBQAFAIABAH9/fxERESH5BAEKAAEALAAAAAAFAAUAAAIHjB9wwItXAAA7",
        gray_plus_7x7      : "data:image/gif;base64,R0lGODlhBwAHAIABAH9/fxERESH5BAEKAAEALAAAAAAHAAcAAAILjI+Apgf/0gptmgIAOw==",
        gray_stripes_thin  : "data:image/gif;base64,R0lGODlhAwADAIABAH9/fxERESH5BAEKAAEALAAAAAADAAMAAAIETHAZBQA7",
        gray_stripes_thick : "data:image/gif;base64,R0lGODlhBQAFAIABAH9/fxERESH5BAEKAAEALAAAAAAFAAUAAAIIRAKGuZbKUAEAOw=="
    }
    
    var url = "media/images/small/black-pixel-2x2.gif";
    
    
    var testBlob = new Blob(["IMMABLOB!"], {type: "text/plain"});
    var testURL  = URL.createObjectURL(testBlob);
    
    const reader = new FileReader();
    reader.addEventListener("loadend", function(){
        var img  = document.createElement("img");
        img.src = "data:image/gif;base64," + btoa(reader.result)
        output.append(img);
    });
    
    fetch(url)
        .then(response => response.blob())
        .then(blob     => reader.readAsBinaryString(blob));
    
});
