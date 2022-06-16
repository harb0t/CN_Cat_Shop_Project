const CatPicture = ({
    image,
    name,
    price,
}) => {
    return (
        <div className="cats">
            <img src={image} alt=""/>
            <div className="catInfo">
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default CatPicture;

