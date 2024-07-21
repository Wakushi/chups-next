// import React from "react"

// const drop = () => {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="h-8 w-8 p-0">
//           <span className="sr-only">Open menu</span>
//           <MoreHorizontal className="h-4 w-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
//           <AlertDialogTrigger asChild>
//             <DropdownMenuItem
//               className="text-red-600"
//               onSelect={(event) => {
//                 event.preventDefault()
//                 setShowDeleteDialog(true)
//               }}
//             >
//               <Trash className="mr-2 h-4 w-4" />
//               Delete
//             </DropdownMenuItem>
//           </AlertDialogTrigger>
//           <AlertDialogContent>
//             <AlertDialogHeader>
//               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//               <AlertDialogDescription>
//                 This action cannot be undone. The document will no longer be
//                 accessible by you or others you&apos;ve shared it with.
//               </AlertDialogDescription>
//             </AlertDialogHeader>
//             <AlertDialogFooter>
//               <AlertDialogCancel>Cancel</AlertDialogCancel>
//               <Button
//                 variant="destructive"
//                 onClick={() => {
//                   deleteSelectedFiles()
//                   setShowDeleteDialog(false)
//                 }}
//               >
//                 Delete
//               </Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialog>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// export default drop
