import * as React from "react"
import { Dot } from "lucide-react"
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
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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

  return (
      <Carousel setApi={setApi} className="w-full h-full flex items-center flex-col justify-center gap-1" >

        <div className="w-full h-full flex items-center justify-center">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Testimonial key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        </div>

        <div className="h-12 relative flex items-center justify-center gap-1">
            <CarouselPrevious variant='ghost' />
            <div className="w-fit flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
                <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-muted-foreground" />
            </div>
            <CarouselNext variant='ghost' />
        </div>
      </Carousel>
  )
}


const Testimonial = () => {

    return (
        <div className="p-5 border w-full h-60 max-w-lg rounded-2xl bg-white dark:bg-background flex flex-col items-start justify-between gap-1">
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