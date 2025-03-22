import PropTypes from "prop-types";


const CustomerRelationship = ({ header, description }) => {
    return (
        <div>
             <div className="w-[639px] mt-14">
          <h2 className="text-4xl font-bold italic">
            &quot;
            {header}
            &quot;
          </h2>
          <p className="text-lg mt-9 font-light">
            {description}
          </p>
        </div>
        </div>
    );
};

CustomerRelationship.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default CustomerRelationship;