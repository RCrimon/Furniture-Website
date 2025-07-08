
let imgArr = [
    {
        img: "image/producet/6452f35b-f4ca-4a8a-bb34-57bb79c109b6-removebg-preview.png"
    },
    {
        img: "image/producet/AmazonSmile__ZETZU_Mid_Century_Modern_Accent_Chair_-removebg-preview.png"
    },
    {
        img: "image/producet/Armchairs___Sofas___Armchairs___John_Lewis-removebg-preview.png"
    },
    {
        img: "image/producet/Fabric_Sofas___Sofa_Sets_-_IKEA-removebg-preview.png"
    },
    {
        img: "image/producet/kreslo_5-removebg-preview.png"
    },
    {
        img: "image/producet/Our_favourite_wooden_armchairs_and_accent_chairs_to_buy_now-removebg-preview.png"
    },
    {
        img: "image/producet/Sofas__Couches_and_Loveseats___Crate_and_Barrel-removebg-preview.png"
    },
    {
        img: "image/producet/The_iSofa-removebg-preview.png"
    },
]




let product = document.querySelector(".productBox")

imgArr.forEach((item)=>{
    product.innerHTML += `<div class="card">
                    <a href="" class="treeDot"><i class="ri-more-fill"></i></a>
                    <div class="productImg">
                        <img src="${item.img}">
                    </div>
                    <div class="productDettels">
                        <div class="dettelBox">
                            <div class="dettel">
                                Wood, Metal, Or Plastic
                            </div>
                            <div class="shopIcon">
                                <i class="ri-shopping-cart-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>`
})
console.log(product)