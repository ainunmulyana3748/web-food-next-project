// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// const dataCardTestimoni = [
//   {
//     id: 1,
//     img: "/testimoni1.jpg", // ganti sesuai path image-mu
//     name: "Selena Gomz",
//     age: "22",
//     testimoni:
//       "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
//   },
//   {
//     id: 2,
//     img: "/testimoni2.jpg",
//     name: "David Ken",
//     age: "24",
//     testimoni:
//       "I can't thank Fresh Feast enough for simplifying my busy lifestyle. With their meals, I no longer have to sacrifice health for convenience. Highly recommend!",
//   },
//   {
//     id: 3,
//     img: "/testimoni3.jpg",
//     name: "Selena Gomz",
//     age: "22",
//     testimoni:
//       "Fresh Feast has become my go-to solution for nutritious meals without the hassle. As someone with dietary restrictions, I appreciate the variety and clarity of their menu options",
//   },
//   // ...lanjutkan sesuai datamu
// ];

// export default function CarouselTestimonial() {
//   return (
//     <div className="w-full relative px-4 sm:px-6 lg:px-8">
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full max-w-7xl mx-auto"
//       >
//         <CarouselContent className="-ml-4 flex">
//           {dataCardTestimoni.map((data) => (
//             <CarouselItem
//               key={data.id}
//               className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
//             >
//               <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col gap-4">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={data.img}
//                     alt={data.name}
//                     width={60}
//                     height={60}
//                     className="rounded-full object-cover w-14 h-14"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-800">{data.name}</p>
//                     <p className="text-sm text-gray-500">
//                       {data.age} years old
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm italic">
//                   “{data.testimoni}”
//                 </p>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Tombol Navigasi */}
//         <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-green-100 text-green-700 border border-green-300 h-10 w-10 rounded-full shadow-md z-10" />
//         <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-green-100 text-green-700 border border-green-300 h-10 w-10 rounded-full shadow-md z-10" />
//       </Carousel>

//       {/* Efek Bayangan Bawah */}
//       <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md h-12 bg-green-900 blur-xl opacity-30 rounded-full pointer-events-none" />
//     </div>
//   );
// }
