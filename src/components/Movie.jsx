import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
const Movie = ({x}) => {
const [Like, setLike] =useState(false);
const [saved, setSaved] = useState(false);
const {user} = UserAuth();

const movieId = doc(db, 'users', `${user?.email}`)
const savedMovies = async () =>{
  if(user?.email){
    setLike(!Like)
    setSaved(true)
    await updateDoc(movieId,{
      savedMovies:arrayUnion({
        id:x.id,
        title: x.title,
        img:x.backdrop_path
      })
    })
  }else{
    alert('Please log in to save a movie')
  }
}

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${x?.backdrop_path}`}
        alt={x?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {x?.title}
        </p>
        <p onClick={savedMovies}>
          {Like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie