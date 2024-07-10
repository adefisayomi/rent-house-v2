import { Button } from "@/components/ui/button"


type ImagesProps = {
    images: {image: string, link: string}[]
}
export default function HomeGallery ({images}: ImagesProps) {

    return (
        <div className='w-full h-[90vh]'>
            <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between gap-6">
                <div className='flex flex-col items-start gap-3 max-w-md'>
                    <h4 className="text-primary uppercase text-xs font-semibold">mervelous world</h4>
                    <h1 className="text-3xl capitalize font-bold text-start">Image Speaks <br /> Volume: Explore the <br /> Our Gallery.</h1>
                    <p className="text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos dolor temporibus vel molestiae delectus, iste velit ad quidem perferendis.</p>
                    <Button className="h-11 capitalize">
                        View all photo
                    </Button>
                </div>

                <Gallery images={images} />
            </div>
        </div>
    )
}

const Gallery = ({ images }: ImagesProps) => {
    return (
      <div className="w-full h-full flex flex-wrap gap-4 max-h-[75%]">
        <div className="flex flex-col gap-4 flex-1">
          <div className="rounded-2xl h-full relative flex overflow-hidden">
            <img
              src={images[0].image}
              alt="image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl h-full relative flex overflow-hidden">
            <img
              src={images[1].image}
              alt="image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex-1 rounded-2xl relative overflow-hidden">
          <img
            src={images[2].image}
            alt="image"
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="rounded-2xl h-full relative flex overflow-hidden">
            <img
              src={images[3].image}
              alt="image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl h-full relative flex overflow-hidden">
            <img
              src={images[4].image}
              alt="image"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    );
  };
  