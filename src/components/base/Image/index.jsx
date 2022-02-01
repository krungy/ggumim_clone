import PropTypes from 'prop-types';

const Image = ({ src, alt, block, width, height, radius, ...props }) => {
  // image style 설정 가로,세로,모드,블록 설정 완료

  const imageStyle = {
    width,
    height,
    display: block && 'block',
    borderRadius: radius && radius,
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
  alt: PropTypes.string.isRequired,
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  block: true,
  width: '100%',
  height: '100%',
  radius: '0',
};

export default Image;
