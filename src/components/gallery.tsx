//@ts-ignore
import image_1 from "../imgs/IMG_4948.HEIC"
import image_2 from "../imgs/FullSizeRender(2).jpg"
//@ts-ignore
import image_3 from "../imgs/IMG_5074.HEIC"
import image_4 from "../imgs/2020-09-22-063734522.jpg"
//@ts-ignore
import image_5 from "../imgs/IMG_5529.JPG"
//@ts-ignore
import image_6 from "../imgs/IMG_5419.HEIC"


export const GalleryPage = () =>{
    return (
  <div className="main_body container mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_5}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_6}/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_4}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="sample" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_2}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_1}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image_3}/>
        </div>
      </div>
    </div>
  </div>
    )
}