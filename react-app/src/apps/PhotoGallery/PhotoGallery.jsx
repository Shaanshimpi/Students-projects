import { useState } from 'react'
import { addPhoto as addPhotoAPI } from './utils/api'

function PhotoGallery() {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://picsum.photos/300/200?random=1', caption: 'Beautiful sunset over the mountains', date: '2024-01-15' }
  ])
  const [newPhoto, setNewPhoto] = useState({ url: '', caption: '' })

  const addPhoto = async () => {
    if (newPhoto.url && newPhoto.caption) {
      await addPhotoAPI(newPhoto)
      setNewPhoto({ url: '', caption: '' })
    }
  }

  return (
    <div>
      <h1>Photo Gallery</h1>
      
      <div>
        <h2>Add Photo</h2>
        <input
          type="url"
          placeholder="Photo URL"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
        />
        <input
          type="text"
          placeholder="Caption"
          value={newPhoto.caption}
          onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
        />
        <button onClick={addPhoto}>Add Photo</button>
      </div>

      <div>
        <h2>Gallery</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', textAlign: 'center' }}>
          <img src="https://picsum.photos/300/200?random=1" alt="Beautiful sunset" style={{ width: '100%', maxWidth: '300px' }} />
          <h3>Beautiful sunset over the mountains</h3>
          <small><strong>Added:</strong> 2024-01-15</small>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', textAlign: 'center' }}>
          <img src="https://picsum.photos/300/200?random=2" alt="City skyline" style={{ width: '100%', maxWidth: '300px' }} />
          <h3>City skyline at night</h3>
          <small><strong>Added:</strong> 2024-01-14</small>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', textAlign: 'center' }}>
          <img src="https://picsum.photos/300/200?random=3" alt="Forest path" style={{ width: '100%', maxWidth: '300px' }} />
          <h3>Peaceful forest path in autumn</h3>
          <small><strong>Added:</strong> 2024-01-13</small>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery