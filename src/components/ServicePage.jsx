// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   CardMedia,
//   List,
//   ListItem,
//   Divider,
// } from "@mui/material";
// import CTA from "./cta";
// import Contact from "./Contact";

// // Example service details data
// const servicesDetails = {
//   "physical-therapy": {
//     title: "PHYSICAL THERAPY",
//     shortDescription: "Rehabilitate injuries and improve mobility with our expert care.",
//     fullDescription:
//       "Our physical therapy programs are designed to help individuals recover from injuries, surgeries, or chronic conditions. We use evidence-based techniques and personalized treatment plans.",
//     conditionsTreated: [
//       "Post-surgical rehabilitation",
//       "Chronic pain management",
//       "Sports injuries",
//     ],
//     image: "/M2M-Website/pt.jpg",
//   },
//   "athletic-recovery": {
//     title: "ATHLETIC RECOVERY",
//     shortDescription: "Enhance your performance with our specialized recovery programs.",
//     fullDescription:
//       "Our athletic recovery program is designed for athletes looking to maximize recovery. We combine soft tissue work with guided exercises.",
//     conditionsTreated: [
//       "Muscle soreness",
//       "Overuse injuries",
//       "Joint stiffness",
//     ],
//     image: "/M2M-Website/recovery.jpg",
//   },
//   "injury-prevention": {
//     title: "INJURY PREVENTION",
//     shortDescription: "Stay ahead of injuries with our tailored prevention strategies.",
//     fullDescription:
//       "Our injury prevention programs focus on assessing movement patterns and strengthening key muscle groups to reduce injury risk.",
//     conditionsTreated: [
//       "Repetitive strain injuries",
//       "Muscle imbalances",
//       "Postural misalignments",
//     ],
//     image: "/M2M-Website/injury-prevention.jpg",
//   },
// };

// const ServicesPage = () => {
//   const location = useLocation();

//   // Auto-scroll logic
//   useEffect(() => {
//     const scrollToId = location.state?.scrollTo;
//     if (scrollToId) {
//       const element = document.getElementById(scrollToId);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 200); // Wait to ensure DOM is rendered
//       }
//     }
//   }, [location]);
//   return (
//     <Box backgroundColor="#F7E7CE">
//       {/* Optional Hero Section */}
//       <Box
//         sx={{
//           height: "30vh",
//           backgroundColor: "#000",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         <Container>
//           <Typography variant="h3" fontWeight="bold">
//             Our Services
//           </Typography>
//           <Typography variant="h6">
//             Explore our comprehensive service offerings.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Render each service section with an id matching the hash */}
//       {Object.entries(servicesDetails).map(([serviceId, service]) => (
//         <Box key={serviceId} id={serviceId} sx={{ py: 6 }}>
//           <Container>
//             <Typography
//               variant="h4"
//               sx={{ textAlign: "center", mb: 4, color: "#000" }}
//             >
//               {service.title}
//             </Typography>
//             <Grid container spacing={4}>
//             <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
//                 <CardMedia
//                   component="img"
//                   image={service.image}
//                   alt={service.title}
//                   sx={{ width: "100%", borderRadius: "8px" }}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="body1" sx={{ mb: 2, color: "#000" }}>
//                   {service.fullDescription}
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 2, color: "#000" }}>
//                   Conditions Treated:
//                 </Typography>
//                 <List>
//                   {service.conditionsTreated.map((condition, idx) => (
//                     <ListItem key={idx}>
//                       <Typography variant="body2" color="#000">
//                         {condition}
//                       </Typography>
//                     </ListItem>
//                   ))}
//                 </List>
//               </Grid>
//             </Grid>
//             <Divider sx={{ my: 4 }} />
//           </Container>
//         </Box>
//       ))}

//       <CTA />
//       <Contact />
//     </Box>
//   );
// };

// export default ServicesPage;
