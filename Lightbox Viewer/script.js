let gallery_items = document.querySelectorAll(".gallery-item");
let lightbox_container = document.querySelector(".lightbox")
let lightbox_image = document.querySelector("#lightbox-image")
let close_btn = document.getElementById("close-btn")
gallery_items.forEach(item =>
{
    item.addEventListener("click", ()=>
    {
    lightbox_container.style.display = "flex"

    let image_src = item.src.replace("-thumbnail","");

    lightbox_image.src=image_src

  
    })
}
)

  close_btn.addEventListener("click",()=>
    {
        lightbox_container.style.display="none"
    })
    
    lightbox_container.addEventListener("click",()=>
    {
        lightbox_container.style.display="none"

    })


