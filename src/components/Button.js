import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ images }) => {
    return (
        <div className='buttons fadein'>
            <div className='button'>
                <label htmlFor='single'>
                    <button color='#3B5998' size='10x' />
                </label>
                <input type='file' id='single' onChange={images.onChange} />
            </div>

            <div className='button'>
                <label htmlFor='multi'>
                    <button color='#6d84b4' size='10x' />
                </label>
                <input type='file' id='multi' onChange={images.onChange} multiple />
            </div>
        </div>
    )
}

Button.propTypes = {

}

export default Button
