import React from 'react'
import { formatDuration } from '../../services/formatDuration'

const TrackList = ({tracks}) => {
  return (
    <>
      {tracks && tracks.length ? (
        <ul>
          {tracks.map((track, index) => (
            <li key={index} className='grid grid-cols-10 text-white font-sm py-4'>
              <div className='col-span-6 flex items-center justify-start'>
                <div className='col-span-1 flex justify-start items-center overflow-visible'>{index  + 1}</div>
                {track.album.images.length && track.album.images[2] && (
                  <div className='mx-6'>
                    <img src={track.album.images[2].url} alt={track.name} className='rounded-md' />
                  </div>
                )}
                <div>
                  <div className='truncate font-semibold text-lg'>
                    {track.name}
                  </div>
                  <div>
                    {track.artists.map((artist, index) => (
                      <span key={index} className='truncate font-light opacity-75'>
                        {artist.name}{index !== track.artists.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='truncate col-span-3 flex items-center'>
                {track.album.name}
              </div>

              <div className='col-span-1 flex justify-end items-center'>
                {formatDuration(track.duration_ms)}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Tracks Available</p>
      )}
    </>
  )
}

export default TrackList