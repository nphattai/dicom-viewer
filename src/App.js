import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import Button from './components/Button';
import Spinner from './components/Spinner';
import { API_URL } from './config'
function App() {
  const [images, setImages] = useState({ image: [] })
  const [uploading, setUploading] = useState(false)

  const onChange = e => {
    const files = Array.from(e.target.files)
    setUploading(true)
    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        setImages({ images })
        setUploading(false)
      })
  }

  const removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
    setImages({ images: images.filter(image => image.public_id !== id) })
  }

  const { image } = images

  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />
      case images.length > 0:
        return <Images images={images} removeImage={this.removeImage} />
      default:
        return <Button onChange={this.onChange} />
    }
  }
  return (
    <div>
      <div className='buttons'>
        {content()}
      </div>
    </div>
  )

}

export default App;
