import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
    <div>안녕 내 이름은 {name} 이야</div>
    <p>{children}</p>
    <p>제일 좋아하는 숫자는{favoriteNumber}이지</p>
    </>
  )
}

MyComponent.defaultProps = {
  name: '천재'
}

MyComponent.propTypes = {
  name:PropTypes.string,
  favoriteNumber:PropTypes.number.isRequired
}
export default MyComponent;