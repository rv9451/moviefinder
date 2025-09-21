import React from 'react'
import searchImg from '../assets/search.png'
function Search({searchTerm, setSearchTerm,onSearch}) {
    const handlekeydow = (e)=>{
        if(e.key==='Enter'){
            onSearch(searchTerm);
        }
    }
  return (
    <div className="search">
        <div>
            <img src={searchImg} alt="Search Icon" />
        
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handlekeydow}
      />
    </div>
    </div>
  )
}

export default Search