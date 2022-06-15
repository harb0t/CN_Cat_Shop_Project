const CatPicture = ({
    image,
    name,
    age,
    price,
}) => {
    return (
        <div className="cats">
            <img src={image} alt=""/>
            <div className="catInfo">
                <h2>{name}</h2>
                <h3>{age}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default CatPicture;

