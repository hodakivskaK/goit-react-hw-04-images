import { useState, useEffect } from 'react';
import {fetchImg} from './FetchImg';
import {Searchbar} from './Searchbar';
import { ImageGallery } from './ImageGallery';
import s from './App.module.css'

export const App = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] =  useState("idle");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(false)
  const [totalImg, setTotalImg] = useState(0);
  
  useEffect(() => {
    if (query) {
      return;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleSubmitSearchbar = query => {
    setQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
    }; 

  useEffect(() => {
    
      function fetchImages() {
    setStatus("pending")
    fetchImg(query,
      currentPage)
      .then(
        gallery => {
            setImages(prevState => [...prevState, ...gallery.hits])
          setTotalImg(gallery.totalHits)
          setStatus("resolved")
        }
      )
      .catch(err => {setError(err)
        setStatus("rejected")
      })
      .finally(() => {
          return
        })
    
    }


    if (query) {
        fetchImages()
    }

    

  }, [query, currentPage, loadMore]);


  const loadMoreToggle = () => {
      setLoadMore(prevState => !prevState);
      setCurrentPage(prevState => prevState + 1)
  }

  
  return  <div className={s.App} >
<Searchbar onSubmit={handleSubmitSearchbar} />
          <ImageGallery
        query={query}
        images={images}
        currentPage={currentPage}
        error={error}
        loadMore={loadMoreToggle}
        total={totalImg}
        status={status}
      />
   </div>

};



