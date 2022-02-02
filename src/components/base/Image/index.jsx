import PropTypes from 'prop-types';

const Image = ({ src, alt, block, width, height, radius, mode, ...props }) => {
  const imageStyle = {
    width,
    height,
    display: block && 'block',
    borderRadius: radius && radius,
    WebkitUserDrag: 'none',
    objectFit: mode ?? 'cover', // cover, none, contain, fill
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
  mode: PropTypes.oneOf(['cover', 'none', 'contain', 'fill']),
};

Image.defaultProps = {
  alt: 'image',
  block: true,
  width: '100%',
  height: '100%',
  radius: '0',
  mode: 'cover',
};

export default Image;
