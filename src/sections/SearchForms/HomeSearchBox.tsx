import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { _propertyTypes } from "./_data";
import { propertySearchSchema } from "./formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import axios from "axios";
import useLocalStorage from "@/src/hooks/useLocalstorage";
import AutocompleteComponent from "./AutocompleteComponent";

export function HomeSearchBox() {
  const form = useForm<yup.InferType<typeof propertySearchSchema>>({
    resolver: yupResolver(propertySearchSchema),
    defaultValues: {
    //   location: "",
      minPrice: 'no min',
      maxPrice: 'no max',
      propertyType: "all type",
      bedrooms: 'any',
    //   furnished: false,
    },
  });
  const [location, setLocation] = useLocalStorage('location', {})
  const _priceList = generatePriceList();


  function onSubmit(data: yup.InferType<typeof propertySearchSchema>) {
    console.log(data);
  }

  return (
    <div id="dark-mode" className="w-full max-w-3xl min-h-32 p-2 flex items-center px-4 rounded-lg dark:border-2">
      <Form {...form}>
        <div className="w-full flex flex-col py-10 px-5 gap-6">
        <div className='flex w-full items-center gap-4'>
            <AutocompleteComponent setLocation={setLocation} />
            <Button type="submit" onClick={form.handleSubmit(onSubmit)} className="text-xs px-10 h-11">Search</Button>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col items-start gap-4 w-full justify-between md:place-items-center">

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2 capitalize">Property Type</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="text-xs">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent className="text-xs">
                      <SelectGroup>
                        {_propertyTypes.map((type, index) => (
                          <SelectItem key={index} className="text-xs capitalize" value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2 capitalize">Bedrooms</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="text-xs">
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent className="text-xs">
                      <SelectGroup>
                        <SelectItem className="text-xs" value="any">any</SelectItem>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <SelectItem key={index} className="text-xs capitalize" value={(index + 1).toString()}>
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="minPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2 capitalize">Min-Price</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="text-xs">
                      <SelectValue placeholder="Min Price" />
                    </SelectTrigger>
                    <SelectContent className="text-xs">
                      <SelectGroup>
                      <SelectItem className="text-xs" value="no min">no min</SelectItem>
                        {_priceList.map((price, index) => (
                          <SelectItem key={index} className="text-xs capitalize" value={price.value.toString()}>
                            {price.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2 capitalize">Max-Price</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="text-xs">
                      <SelectValue placeholder="Max Price" />
                    </SelectTrigger>
                    <SelectContent className="text-xs">
                      <SelectGroup>
                      <SelectItem className="text-xs" value="no max">no max</SelectItem>
                        {_priceList.map((price, index) => (
                          <SelectItem key={index} className="text-xs capitalize" value={price.value.toString()}>
                            {price.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        </div>
      </Form>
    </div>
  );
}

const generatePriceList = (): { value: number, label: string }[] => {
  const prices: { value: number, label: string }[] = [];

  const addPrice = (price: number, label: string) => {
    prices.push({ value: price, label: `₦ ${label}` });
  };

  // Add specific ranges
  const ranges = [
    { max: 1000000, step: 100000 },   // 100,000 to 1 Million
    { max: 10000000, step: 1000000 }, // 1 Million to 10 Million
    { max: 100000000, step: 10000000 }, // 10 Million to 100 Million
    { max: 300000000, step: 50000000 }  // 100 Million to 300 Million
  ];

  // Populate price options
  ranges.forEach(({ max, step }) => {
    for (let price = prices.length === 0 ? 100000 : prices[prices.length - 1].value + step; price <= max; price += step) {
      const formattedPrice = price >= 1000000
        ? `${(price / 1000000).toLocaleString()} Million`
        : `${price.toLocaleString()}`;
      addPrice(price, formattedPrice);
    }
  });

  return prices;
};
