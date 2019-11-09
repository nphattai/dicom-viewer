import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ images }) => {
    return images.map((image, i) => (
        <div key={i} className='fadein'>
            <div
                onClick={() => image.removeImage(image.public_id)}
                className='delete'
            >
                <button size='2x' />
            </div>
            <img src={image.secure_url} alt='' />
        </div>
    )
    )
}

Spinner.propTypes = {

}

export default Spinner
