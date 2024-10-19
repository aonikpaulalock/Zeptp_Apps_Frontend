
import loadingGif from '../../assets/Loading1.gif';

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={loadingGif} alt="Loading..." className="max-w-full max-h-full" />
    </div>
  );
};

export default Loading;