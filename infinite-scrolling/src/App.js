import useBookSearch from "./useBookSearch";
import React,{useState,useRef, useCallback} from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { loading,
    error,
    books,
    hasMore 
  } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if(loading) return 
    if(observer.current ) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting && hasMore){
        setPageNumber( prevPageNumber => prevPageNumber+1)
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleChange(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  

  return (
    <>
      <input type="text" onChange={handleChange} />
      {
       books.map(( book, index ) => {
        if(index+1 === books.length){
        return <div ref={lastBookElementRef} key={book}>{book}</div>
      }
      else{
        return <div key={book}>{book}</div>
      }
       })
      }
      
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
    </>
  );
}

export default App;
