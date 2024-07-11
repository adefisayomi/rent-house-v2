import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Rating from "@/components/Rating"
import Image from "next/image"

export default function TestimonialSlider () {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(3)
  const [count, setCount] = React.useState(0)

  const handleSetActive = (index: number) => api?.scrollTo(index)

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  
console.log(current, count)

  return ( 
    <div className="flex flex-col gap-8">
        <div className="w-full flex items-center justify-center flex-col gap-1">
            <h2 className="text-xs uppercase text-primary font-medium">Hear from our</h2>
            <h1 className="text-3xl capitalize font-semibold">Happy Home Owners!</h1>
        </div>
    
      <Carousel setApi={setApi} opts={{align: 'center'}} className="w-full h-full flex items-center flex-col justify-center gap-8" >
        <div className="w-full h-full flex items-center justify-center">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={`pl-4 basis-[100%] md:basis-1/3`} style={{flex: '0 0 50%'}}>
              <Testimonial key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        </div>

        <div className="h-fit relative flex items-center justify-center gap-1">
            <CarouselPrevious variant='ghost' />
            <div className="w-fit flex items-center gap-1">
                {
                    Array.from({length: count}).map((_, index) => (
                        <DotButton onClick={() => handleSetActive(index)} active={index+1 === current} />
                    ))
                }
            </div>
            <CarouselNext variant='ghost' />
        </div>
      </Carousel>
      </div>
  )
}


const Testimonial = () => {

    return (
        <div className="p-8 border w-full h-72 max-w-[50vw] rounded-2xl bg-white dark:bg-background flex flex-col items-start justify-between gap-1">
            <Rating />
            <p className="text-muted-foreground text-[11px]">Arcu ac tortor dignissim convallis aenean et tortor at.Ac turpis egestas sed tempus urna et. Quisque eu pellentesque erat, eget bibendum ipsum. Cras euismod massa sed lacus lacinia, quis porta libero consectetur. In pulvinar lobortis eros vitae dapibus. Vestibu</p>

            <div className="w-fit mx-auto flex items-center gap-1">
                <Image
                    src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-10 h-10 rounded-md object-cover"
                />
                <div className="flex flex-col items-start">
                    <h4 className="text-[11px] capitalize font-semibold">melanin king</h4>
                    <h5  className="text-[10px] text-muted-foreground lowercase">photographer</h5>
                </div>
            </div>
        </div>
    )
}

const DotButton = ({onClick, active}: {onClick: () => void, active: boolean}) => {
    return (
        <button className={`w-2 h-2 rounded-full ${active ? 'bg-primary' : 'bg-gray-400'}`} onClick={onClick} />
    )
}