import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { SlashIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


type PropsCrumbs = {
    label: string;
    href: string;
}

export default function BreadcrumbHeader ({className}: {className?: string}) {

  const {pathname} = useRouter();
  const [crumbs, setCrumbs] = useState<PropsCrumbs[]>([])

  const generateBreadcrumbs = () => {
    const pathWithoutQuery = pathname.split('?')[0]; // Remove query params if any
    const pathSegments = pathWithoutQuery.split('/').filter(segment => segment); // Remove empty segments

    const breadcrumbs = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return { href, label: segment };
    });

    return [{ href: '/', label: 'Home' }, ...breadcrumbs];
  };

  useEffect(() => {
    setCrumbs(() => generateBreadcrumbs())
  }, [pathname, generateBreadcrumbs])

    return (
      <Breadcrumb>
        <BreadcrumbList className={`text-xs capitalize  ${className}`}>
            {
                crumbs && crumbs.length > 0 && crumbs.map((crumb: PropsCrumbs, index: number) => (
                    <div key={index} className="flex">
                        <BreadcrumbItem>
                            <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {
                            index !== crumbs.length - 1 && 
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                        }
                    </div>
                ))
            }
        </BreadcrumbList>
      </Breadcrumb>
    )
  }