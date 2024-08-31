import React from 'react'
import Drawer from '@mui/material/Drawer';
interface DrawerDefaultProps {
    open?: boolean;
    closeDrawer?: () => void;
  }
  const DrawerDefault: React.FC<DrawerDefaultProps> = ({ open = false, closeDrawer = () => {} }) => {
    return (
        <div>
        <Drawer open={open} onClose={closeDrawer}>
            <div className="px-8 py-4">
            <div className="flex items-center justify-between mb-6 text-black gap-x-4">
              <div  color="blue-gray">
              All Categories
              </div>
              <div onClick={closeDrawer} className="flex items-center justify-center cursor-pointer">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

              </div>
            </div>

            <div className="space-y-3">
            {/* {
                categories?.map((category, index) => (
                  <div 
                  onClick={(e)=>{
                    e.preventDefault();
                    closeDrawer();
                    router.push(`/category/featured/${category?._id}`)
                  }}
                    className="flex flex-col text-black cursor-pointer hover:text-cDeepSaffron " key={index}>
                      {category?.title}
                  </div>
                ))
              } */}
            </div>

                    </div>
          </Drawer>
        </div>
    )
}

export default DrawerDefault