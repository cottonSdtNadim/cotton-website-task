// import clientHeader from "../assets/images/client-collaboration-header.jpg";
// import {content} from "../content/content.js";

// const ClientCollaborationHeader = () => {
//   const {description} = content.en.clientCollaborationHeader;
//   return (
//     <div
//       className="my-40"
//       style={{
//         background: `linear-gradient(0deg, rgba(11, 113, 76, 0.70) 0%, rgba(11, 113, 76, 0.70) 100%), url(${clientHeader})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "350px",
//       }}
//     >
//       <h2 className="text-white font-extrabold text-4xl text-center p-[120px]">
//        {/*  By partnering with our clients to create what matters, we improve the
//       value chain experience. */}
//       {
//         description
//       }
//       </h2>
//     </div>
//   );
// };

// export default ClientCollaborationHeader;

import clientHeader from "../assets/images/client-collaboration-header.jpg";
import { content } from "../content/content.js";

const ClientCollaborationHeader = () => {
  const { description } = content.en.clientCollaborationHeader;
  
  return (
    <div
      className="my-10 md:my-40"
      style={{
        background: `linear-gradient(0deg, rgba(11, 113, 76, 0.70) 0%, rgba(11, 113, 76, 0.70) 100%), url(${clientHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center h-[250px] md:h-[350px] px-6 md:px-12">
        <h2 className="text-white font-extrabold text-2xl md:text-4xl text-center 2xl:px-40">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default ClientCollaborationHeader;
