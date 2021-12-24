function showCart(name,price,s_price,image){
    let pro_image = document.getElementById("pro-image");
    let pro_title = document.getElementById("pro-title");
    let cut_price = document.getElementById("pro-cut-price");
    let pro_price = document.getElementById("pro-price");

    pro_image.src = image;
    pro_title.innerHTML = name;
    cut_price.innerHTML = price;
    pro_price.innerHTML = s_price;
}

function addToCart(data){
    var options = {
    autoClose: true,
    progressBar: true,
    enableSounds: true,
    sounds: {
        info: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233294/info.mp3",
    },
    };
    
    var toast = new Toasty(options);
    toast.configure(options);

    toast.info("Product has been added to cart!");
}
