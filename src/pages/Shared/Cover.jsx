import image from '../../assets/images/factory-inside.jpg'
import Navbar from './Navbar';

const Cover = () => {
    return (
        <div className="relative">
            <div 
                className="w-full h-screen"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${image})`,
                    backgroundPosition: '50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute top-0 left-0 right-0 z-10">
                    <Navbar nonActiveTextColor="#F8FBFA" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-6xl font-bold text-white">Our Story</h1>
                </div>
            </div>
        </div>
    );
};

export default Cover;
