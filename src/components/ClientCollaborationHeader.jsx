import clientHeader from "../assets/images/client-collaboration-header.jpg";

const ClientCollaborationHeader = () => {
  return (
    <div
      className="my-40"
      style={{
        background: `linear-gradient(0deg, rgba(11, 113, 76, 0.70) 0%, rgba(11, 113, 76, 0.70) 100%), url(${clientHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
      }}
    >
      <h2 className="text-white font-extrabold text-4xl text-center p-[120px]">By partnering with our clients to create what matters, we improve the
      value chain experience.</h2>
    </div>
  );
};

export default ClientCollaborationHeader;
