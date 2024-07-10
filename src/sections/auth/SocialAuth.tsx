import { Button } from '@/components/ui/button';
import useAuthStore from '@/src/contexts/useAuthStore';
import { Icon } from '@iconify/react';


export function GoogleAuth ({handleClick}: {handleClick: () => void}) {


    return (
        <Button onClick={handleClick} variant='outline' className=' capitalize font-medium h-11 text-xs flex items-center gap-2'>
            <Icon icon="devicon:google" className="h-6 w-6" /> Google
        </Button>
    )
}

export function FacebookAuth ({handleClick}: {handleClick: () => void}) {
    return (
        <Button onClick={handleClick} variant='outline' className=' capitalize font-medium h-11 text-xs flex items-center gap-2'>
            <Icon icon="logos:facebook" className="h-6 w-6"  /> Facebook
        </Button>
    )
}

export default function SocialAuth () {

    const {loginWithGoogle, facebookLogin} = useAuthStore()

    return (
        <div className='w-full grid grid-cols-2 gap-2'>
            <GoogleAuth handleClick={loginWithGoogle} />
            <FacebookAuth handleClick={facebookLogin} />
        </div>
    )
}