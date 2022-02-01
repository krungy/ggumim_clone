import PropTypes from 'prop-types';

const Image = ({ src, alt, block, width, height, radius, ...props }) => {
  const imageStyle = {
    width,
    height,
    display: block && 'block',
    borderRadius: radius && radius,
    WebkitUserDrag: 'none',
  };

  return (
    <img
      alt={alt}
      src={src}
      style={{ ...props.style, ...imageStyle }}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  alt: 'image',
  block: true,
  width: '100%',
  height: '100%',
  radius: '0',
};

export default Image;
