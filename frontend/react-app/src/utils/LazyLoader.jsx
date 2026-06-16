import {useInView} from 'react-intersection-observer'
import {Suspense} from 'react'
function LazyLoaderSection({Component, Skeleton}){
    const {inView,  ref} = useInView({threshold:0.1, triggerOnce:true})
    return(
        <div ref={ref}>
            {inView ? (
                <Suspense fallback={<Skeleton />}>
                    <Component />
                </Suspense>
            ) :(
                <Suspense fallback={<Skeleton /> }/>
                
            )
            }

        </div>

    )
}
export default LazyLoaderSection;