import Heading from "../../../Layout/Shared/Heading/Heading";

const Header = () => {
    return (
        <>
        <Heading title="This is the perfect house for rent" subtitle="Maninkganj, Dhaka, Bangladesh,"/>
        <div className="w-full md:h-[60vh]  mx-auto overflow-hidden">
            <img className="w-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?w=996&t=st=1698128499~exp=1698129099~hmac=0d8ce7c04a11f68ec57f982f66737e4caf82963b54acb7939d39e5281ea7ae69" alt="" />

        </div>
            
        </>
    );
};

export default Header;