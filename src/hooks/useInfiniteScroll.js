import { useState, useRef, useEffect } from 'react'
import { API } from '../services/constants'

const useInfiniteScroll = () => {
  const [page, setPage] = useState(API.initialPage)
  const loadMoreRef = useRef(null)

  const observer = useRef(
		new IntersectionObserver((entries) => {
			const [target] = entries;
			if (target.isIntersecting) {
				setPage((prev) => prev + 1);
			}
		})
	);

  useEffect(() => {
    const currentElement = loadMoreRef.current;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
	}, [loadMoreRef]);

  return { loadMoreRef, page }
}

export default useInfiniteScroll