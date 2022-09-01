import React from 'react'

const ArtistsGrid = ({artists}) => {
  return (
    <>
      {artists && artists.length ? (
        <div className='grid grid-cols-10 gap-8'>
          {artists.map((artist) => (
            <li key={artist.name} className='flex flex-col justify-center items-center col-span-2 h-96 bg-secondary-300 shadow-xl text-white text-2xl font-semibold rounded-lg'>
              {artist.images[0] && artist.images.length &&(
                <img src={artist.images[0].url} alt={artist.name} className='w-56 h-56 drop-shadow-2xl shadow-2xl rounded-full object-cover' />
              )}
              <div className='w-full flex flex-col justify-start items-start p-6'>
                <h3 className='text-xl truncate'>{artist.name}</h3>
                <p className='text-base font-light opacity-50 tracking-wide'>Artist</p>
              </div>
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