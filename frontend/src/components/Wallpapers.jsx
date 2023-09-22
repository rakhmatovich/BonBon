import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const PAGE_WIDTH = 805

export default function Wallpapers({ children }) {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset + PAGE_WIDTH
            if (newOffset === 805) {
                newOffset = 805 * -3
            }
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset - PAGE_WIDTH
            if (newOffset < 805 * -3) {
                newOffset = 0
            }
            const maxOffset = -(805 * (pages.length - 1))

            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                        height: '100%',
                    },
                })
            })
        )
    }, [])


    return (
        <div className={`w-[${PAGE_WIDTH}px] h-[500px] flex items-center`}>
            <FaChevronLeft className="cursor-pointer absolute z-10" onClick={handleLeftArrowClick} size={30} />
            <div className="w-full h-full truncate">
                <div
                    className="h-full flex scale-75 translate-x-4 skew-y-3 md:transform-none transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="cursor-pointer absolute left-[780px] z-10" onClick={handleRightArrowClick} size={30} />
        </div>
    )
}
