import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'




const Carousel = ({ children }) => {
  const PAGE_WIDTH = window.innerWidth
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + PAGE_WIDTH
      if (newOffset === PAGE_WIDTH) {
        newOffset = PAGE_WIDTH * -3
      }
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - PAGE_WIDTH
      if (newOffset < PAGE_WIDTH * -3) {
        newOffset = 0
      }
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

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
    <div
      className={`w-[${PAGE_WIDTH}px] h-[90vh] flex items-center`}>
      <FaChevronLeft className="cursor-pointer absolute left-4 top-[50vh] z-10" onClick={handleLeftArrowClick} size={30} />
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
      <FaChevronRight className="cursor-pointer absolute right-4 top-[50vh]" onClick={handleRightArrowClick} size={30} />
    </div>
  )
}

export default Carousel