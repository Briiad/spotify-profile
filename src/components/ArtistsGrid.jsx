import React from 'react'

const ArtistsGrid = ({artists}) => {
  return (
    <>
      {artists && artists.length ? (
        <div className='flex justify-between items-center'>
          {artists.map((artist) => (
            <li key={artist.name} className=' text-white text-2xl font-semibold'>
              {artist.images[0] && artist.images.length &&(
                <img src={artist.images[0].url} alt={artist.name} width={200} height={200} className='rounded-full' />
              )}
              <h3>{artist.name}</h3>
              <p>Artist</p>
            </li>
          ))}
        </div>
      ) : (
        <p>No Artists Available</p>
      )}
    </>
  )
}

export default ArtistsGrid